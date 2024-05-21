import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext(undefined);
const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = 'http://localhost:8000/api/register/';

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem('token') || '');

    const login = async (username, password) => {
        try {
            const response = await axios.post('http://localhost:8000/api/auth-token/', {
                username,
                password,
            });
            const { token } = response.data;
            localStorage.setItem('token', token);
            setToken(token); 
        } catch (error) {
            console.error('Login failed:', error);
            
        }
    };

    const register = async (username, email, password) => {
        try {
            const response = await axios.post(REGISTER_URL, {
                username,
                name:email,
                password,
            });
            console.log('Registration successful:', response.data);
            
        } catch (error) {
            console.error('Registration failed:', error);
        
            throw error; 
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        console.log("Utilizatorul a fost deconectat!");
        setToken("");
    };

    const value = { token, login, register, logout };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook to use the auth context
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
    throw new Error('useAuth must be used by a child of AuthProvider')
    }
    return context;
    }
