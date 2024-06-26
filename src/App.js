import React from 'react';
import './App.css';
import LoginForm from './Components/LoginForm/LoginForm';
import Register from './Components/LoginForm/Register';
import Forgot from './Components/LoginForm/Forgot';
import Homepage from './Homepage';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import { useAuth } from './contexts/AuthContexts';



function App() {

  // we need to check for auth
  // we figure out if the client has a token

  const {token} = useAuth()

  if (!token) {
    return <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  }

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          {/*  HERE you can add profiles or other stuff */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
