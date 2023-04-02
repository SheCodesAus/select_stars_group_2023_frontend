import React, { useState, useEffect } from 'react'
import { useParams, Link } from "react-router-dom"
import './loginform.css';
import {useNavigate} from "react-router-dom";

// const LoginForm = () => {
    

//     const [popupStyle, showPopup] = useState("hide")

//     const popup = () => {
//         showPopup("login-popup")
//         setTimeout(() => showPopup("hide"), 3000)
//     }
//     return (
//         <div className="cover">
//             <h1>Welcome!</h1>
//             <input type="text" placeholder="Enter your email" />
//             <input type="password" placeholder="Enter your password" />
//             <div className="login-button" onClick={popup}>Login</div>
//             {/* <div className="createAccount-button">
//                 <Link to="/register">
//                     Register</Link>
//             </div> */}
//             <div className={popupStyle}>
//                 <h3>Login Failed</h3>
//                 <p>Username of password is incorrect</p>
//             </div>
//         </div>
//     );
// };

function LoginForm() {
    const [credentials, setCredentials] = useState({
        username:"",
        password:""
    });

    const navigate = useNavigate();

 

    const handleChange = (event) => {
        const {id, value} = event.target;
        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [id]: value,
        }));
    }

    const postData = async() => {
        const response = await fetch(
            `${import.meta.env.VITE_API_URL}api-token-auth/`, {
                method: "post",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(credentials),
            }
        );
        return response.json();
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (credentials.username && credentials.password) {
           postData().then((response) => {
                window.localStorage.setItem("token", response.token);
                navigate("/");
            
            });
        }
    }

    return (
        <form className="cover">
            <h1>Welcome!</h1>
            <div className="field_container">
                <label htmlFor="username" className="login_label">Username:</label>
                <input
                    type="text"
                    id="username"
                    placeholder="Enter username"
                    onChange={handleChange}
                />
            </div>
            <div className="field_container">
                <label htmlFor="password" className="login_label">Password: </label>
                <input
                    type="password"
                    id="password"
                    placeholder="Enter password"
                    onChange={handleChange}
                />

            </div>

            <button type="submit" onClick={handleSubmit} id="login-button">Login</button>
        </form>
    )
}

export default LoginForm