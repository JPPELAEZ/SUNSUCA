// src/pages/UserHome.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/UserHome.css';

const UserHome = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('role');
    navigate('/login');
  };

  return (
    <div className="user-home-container">
      <div className="user-home-header">
        <h2>Bienvenido Usuario</h2>
      </div>

      <div className="user-home-nav">
        <Link to="/my-events">Mis Eventos</Link>
        <Link to="/schedule">Agenda</Link>
        <Link to="/catalog">Catálogo de Servicios</Link>
      </div>

      <div className="user-home-content">
        <h3>Panel de Usuario</h3>
        <p>Aquí puedes gestionar tus eventos y acceder a los servicios disponibles.</p>
      </div>

      <button className="user-home-logout" onClick={handleLogout}>
        Cerrar sesión
      </button>
    </div>
  );
};

export default UserHome;
