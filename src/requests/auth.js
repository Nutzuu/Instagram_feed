import React, { useState } from 'react';
import axios from 'axios';

const LoginToken= () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/auth-token', {
        email,
        password,
      });
      // Dacă autentificarea este reușită, poți face ceva, cum ar fi redirecționarea către o altă pagină
      console.log(response.data); // Poți trata răspunsul aici
    } catch (error) {
      // Dacă autentificarea eșuează, afișează eroarea
      console.error('Eroare la autentificare:', error);
      setError('Autentificare eșuată. Verifică email-ul și parola.');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Parola" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Autentificare</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default LoginToken;
