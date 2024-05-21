import React, {useState, useEffect} from "react";
import './LoginForm.css';
import { FaUserAlt, FaLock } from "react-icons/fa";
import axios from "axios";
import { useAuth } from "../../contexts/AuthContexts";


const LoginForm = () => {
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
        const {login} = useAuth()
        useEffect(() => {
            console.log("Hello"); 
        }, []);
    return (
        <div className="wrapper">
            <div >
                <h1>Login</h1>
                <div className="input-box">
                    <input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />    
                    <FaUserAlt className="icon" />
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Parola" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <FaLock className="icon" />
                </div>

                <div className="remember-forgot">
                    <label><input type="checkbox" />Remember me</label>
                    <a href="/forgot">Forgot password?</a>
                </div>

                <button onClick={() => login(username, password)}>Login</button>
                <div className="register-link">
                    <p>Don't have an account? <a href="/register">Register</a></p>
                </div>
            </div>

        </div>
    )
}

export default LoginForm