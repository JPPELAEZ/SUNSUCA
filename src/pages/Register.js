// src/pages/Register.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// src/pages/Login.js o Register.js
import '../styles/Auth.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('client');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push({ username, password, role });
    localStorage.setItem('users', JSON.stringify(users));
    navigate('/login');
    alert('Registro exitoso');
  };

  return (
    <div className="register-container">
      <h2>Registro</h2>
      <form onSubmit={handleRegister}>
        <input type="text" placeholder="Usuario" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="client">Cliente</option>
          <option value="admin">Administrador</option>
        </select>
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default Register;
