import React, { useState } from "react";
import "./loginform.css"

const LoginForm = () => {

    const [popupStyle, showPopup] = useState("hide")

    const popup = () => {
        showPopup("login-popup")
        setTimeout(() => showPopup("hide"), 3000)
    }
    return (
        <div className="cover">
            <h1>Welcome!</h1>
            <input type="text" placeholder="username"/>
            <input type="password" placeholder="password"/>

            <div className="login-button"onClick={popup}>Login</div>
            <div className="createAccount-button">Create an account</div>

            <div className={popupStyle}>
                <h3>Login Failed</h3>
                <p>Username of password is incorrect</p>
            </div>

        </div>
    );
};

export default LoginForm