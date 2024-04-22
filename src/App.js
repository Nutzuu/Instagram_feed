import React from 'react';
import './App.css';
import LoginForm from './Components/LoginForm/LoginForm';
import Register from './Components/Register/Register';
import Forgot from './Components/Forgot/Forgot';
import Homepage from './Homepage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/home" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
