import React from "react";
import './Forgot.css';
import {  FaLock, FaEnvelope } from "react-icons/fa";

const LoginForm = () => {
    return (
        <div className="wrapper">
            <form action="">
                <h1>Forgot your password?</h1>
                
                <div className="input-box">
                    <input type="text" placeholder="e-mail" required />
                    <FaEnvelope className="icon" />
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Enter new password" required />
                    <FaLock className="icon" />
                </div>

                <div className="input-box">
                    <input type="password" placeholder="Confirm Password" required />
                    <FaLock className="icon" />
                </div>


                <button type="submit">Reset password</button>
                <div className="register-link">
                    <p>Know the password?<a href="/login">Login</a></p>
                </div>
            </form>

        </div>
    )
}

export default LoginForm