import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import './changePasswordForm.css';

function ChangePasswordForm() {

    // class PasswordResetForm extends React.Component {
    //     constructor(props) {
    //       super(props);
    //       this.state = {
    //         password: "",
    //         passwordVerify: "",
    //       };
      
    //       this.handleInputChange = this.handleInputChange.bind(this);
    //       this.handleSubmit = this.handleSubmit.bind(this);
    //     }
      
    //     // Whenever an input changes value, change the corresponding state variable
    //     handleInputChange(event) {
    //       event.preventDefault();
    //       const target = event.target;
    //       this.setState({
    //         [target.name]: target.value,
    //       });
    //     }
    // }


    const [password, setPassword] = useState({
        // username: '',
        // email: '',
        password: '',
    });

    const navigate = useNavigate();

    const handleChange = (event) => {
        const { id, value } = event.target;
        setPassword((prevPassword) => ({
            ...prevPassword,
            [id]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        postData().then((response) => {
            // window.localStorage.setItem("token", response.token);
            ("password", response.password)
            console.log(password)
            navigate("/");
        })

       
    };

    const postData = async () => {
        const token = window.localStorage.getItem("token");
        const response = await fetch(`${import.meta.env.VITE_API_URL}user/change-password/`, {
            method: "put",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `token ${token}`
            },
            body: JSON.stringify(password),
        })
        return response.json()
    }

    return (
        <div >
            
            <form className='cover'>
            <h1>
                Change password
            </h1>
                <div className='field_container'>
                    <label htmlFor='old_password' className="login_label">Current password:</label>
                    <input
                        type="text"
                        id="old_password"
                        placeholder="Enter current password"
                        onChange={handleChange}
                    />
                </div>
                <div className='field_container'>
                    <label htmlFor='new_password' className="login_label">New password:</label>
                    <input
                        type="text"
                        id="new_password"
                        placeholder="Enter new password"
                        onChange={handleChange}
                    />
                </div>
              
                <button type="submit" onClick={handleSubmit} id="update-button">Update</button>
           
            </form>
        </div>
    )
};

export default ChangePasswordForm;