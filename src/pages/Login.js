import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/Auth.css';  // Asegúrate de que el CSS está correcto

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Obtener los usuarios desde localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Buscar el usuario que coincida con los datos ingresados
    const user = users.find((u) => u.username === username && u.password === password);

    if (user) {
      // Guardar el rol en localStorage
      localStorage.setItem('role', user.role);

      // Redirigir según el rol
      if (user.role === 'admin') {
        navigate('/AdminHome');  // Página de administrador
      } else {
        navigate('/UserHome');   // Página de usuario
      }
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  };

  return (
    <div className="login-container">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Iniciar Sesión</button>
      </form>
      <p>¿No tienes cuenta? <Link to="/register">Regístrate</Link></p>
    </div>
  );
};

export default Login;
