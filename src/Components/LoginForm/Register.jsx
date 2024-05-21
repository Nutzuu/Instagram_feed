import React, { useState } from "react";
import './Register.css';
import { FaUserAlt, FaLock, FaEnvelope } from "react-icons/fa";
import { useAuth } from "../../contexts/AuthContexts";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const RegisterForm = () => {
    const { register } = useAuth();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!USER_REGEX.test(username)) {
            setErrMsg('Numele de utilizator trebuie să înceapă cu o literă și să conțină doar litere, cifre, - și _ și să aibă între 4 și 24 de caractere.');
            return;
        }
        if (!PWD_REGEX.test(password)) {
            setErrMsg('Parola trebuie să conțină cel puțin o literă mică, o literă mare, un număr, unul dintre caracterele speciale !@#$% și să aibă între 8 și 24 de caractere.');
            return;
        }
        if (password !== confirmPassword) {
            setErrMsg('Parolele nu se potrivesc.');
            return;
        }
        
        try {
            await register(username, email, password);
        } catch (error) {
            console.error("Eroare la înregistrare:", error);
            setErrMsg('Înregistrarea a eșuat. Te rog să încerci din nou.');
        }
    };

    const isAllConditionsMet = !!username && !!email && !!password && !!confirmPassword && errMsg === '';

    return (
        <div className="wrapper">
            <form onSubmit={handleSubmit}>
                <h1>Register</h1>
                <div className="input-box">
                    <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                    <FaUserAlt className="icon" />
                </div>
                <div className="input-box">
                    <input type="email" placeholder="e-mail" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <FaEnvelope className="icon" />
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <FaLock className="icon" />
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                    <FaLock className="icon" />
                </div>
                {errMsg && <div className="error-msg">{errMsg}</div>}
                <button type="submit" disabled={!isAllConditionsMet}>Register</button>
            </form>
            <div className="register-link">
                <p>Have an account? <a href="/login">Login</a></p>
            </div>
        </div>
    )
}

export default RegisterForm;
