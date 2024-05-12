import React from "react";
import './Register.css';
import { FaUserAlt, FaLock, FaEnvelope } from "react-icons/fa";

const LoginForm = () => {
    return (
        <div className="wrapper">
            <form action="">
                <h1>Register</h1>
                <div className="input-box">
                    <input type="text" placeholder="Username" required />
                    <FaUserAlt className="icon" />
                </div>
                <div className="input-box">
                    <input type="text" placeholder="e-mail" required />
                    <FaEnvelope className="icon" />
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Password" required />
                    <FaLock className="icon" />
                </div>

                <div className="input-box">
                    <input type="password" placeholder="Confirm Password" required />
                    <FaLock className="icon" />
                </div>


                <button type="submit">Register</button>
                <div className="register-link">
                    <p>Have an account? <a href="/login">Login</a></p>
                </div>
            </form>

        </div>
    )
}

export default LoginForm