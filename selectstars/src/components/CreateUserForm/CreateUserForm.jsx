import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import './CreateUserForm.css';

function CreateUserForm() {
    const [credentials, setCredentials] = useState({
        username: '',
        email: '',
        password: '',
    });

    const navigate = useNavigate();

    const handleChange = (event) => {
        const { id, value } = event.target;
        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [id]: value
        }));

        console.log(event)
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (
            credentials.username && credentials.email && credentials.password) {
            postData().then((response) => {
            window.localStorage.setItem("credentials", JSON.stringify(response.credentials));

                // window.localStorage.setItem("token", response.token);
                // ("credentials", response.credentials)
                console.log(credentials)
                navigate("/");
            })
        }
    };

    const postData = async () => {

        const response = await fetch(`${import.meta.env.VITE_API_URL}create-account/`, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
        })
        return response.json()
    }

    return (
        <div className='register-page'>
            <div className="background-image"></div>
            <h1>
                Create New User
            </h1>
             <form className='register-form'>
                <div className='signUpField'>
                    <label htmlFor='username'>Username</label>
                    <input
                        type="text"
                        id="username"
                        placeholder="Enter your username"
                        onChange={handleChange}
                    />
                </div> 
                {/* <div className='signUpField'>
                    <label htmlFor='last_name'>Last name:</label>
                    <input
                        type="text"
                        id="Last name"
                        placeholder="Enter last name"
                        onChange={handleChange}
                    />
                </div> */}
                <div className='signUpField'>
                    <label htmlFor='email'>Email</label>
                    <input
                        type="text"
                        id="email"
                        placeholder="Enter your email"
                        onChange={handleChange}
                    />
                </div>
                <div className='signUpField'>
                    <label htmlFor='password'>Password</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Password"
                        onChange={handleChange}
                    />
                </div>
                {/* <div className='signUpField'> */}
                    {/* <label htmlFor='img'>Profile picture:</label>
                    <input
                        type="url"
                        id="profile_img"
                        placeholder="Link"
                        onChange={handleChange}
                    />
                </div>
                <div className='signUpField'>
                    <label htmlFor='position'>Position:</label>
                    <input
                        type="text"
                        id="position"
                        placeholder="Position in She Codes"
                        onChange={handleChange}
                    />
                </div> */}
                <div className='signUpField'>
                    <button type="submit" onClick={handleSubmit}>Create Account</button>
                </div>
            </form>
        </div>
    )
};

export default CreateUserForm;