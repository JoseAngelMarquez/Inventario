// src/pages/Login.jsx
import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg('');

    try {
      const res = await axios.post('http://localhost:3001/api/login', { username, password });
      setMsg(res.data.message);
      // Aquí podrías guardar el usuario o token en localStorage o contexto
    } catch (err) {
      if (err.response) setMsg(err.response.data.message);
      else setMsg('Error de conexión');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Usuario" onChange={e => setUsername(e.target.value)} required />
      <input type="password" placeholder="Contraseña" onChange={e => setPassword(e.target.value)} required />
      <button type="submit">Entrar</button>
      {msg && <p>{msg}</p>}
    </form>
  );
}

export default Login;
