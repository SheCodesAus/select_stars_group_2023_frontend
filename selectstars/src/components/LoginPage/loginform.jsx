import React, { useState, useEffect } from 'react'
import { useParams, Link } from "react-router-dom"
import './loginform.css';

const LoginForm = () => {

    const [popupStyle, showPopup] = useState("hide")

    const popup = () => {
        showPopup("login-popup")
        setTimeout(() => showPopup("hide"), 3000)
    }
    return (
        <div className="cover">
            <h1>Welcome!</h1>
            <input type="text" placeholder="Enter your email" />
            <input type="password" placeholder="Enter your password" />
            <div className="login-button" onClick={popup}>Login</div>
            {/* <div className="createAccount-button">
                <Link to="/register">
                    Register</Link>
            </div> */}
            <div className={popupStyle}>
                <h3>Login Failed</h3>
                <p>Username of password is incorrect</p>
            </div>
        </div>
    );
};

export default LoginForm