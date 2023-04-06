import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import './changePasswordForm.css';

function ChangePasswordForm() {

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
        <div className='change-password-background'>
            
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