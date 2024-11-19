// src/pages/AdminHome.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/AdminHome.css';

const AdminHome = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('role');
    navigate('/login');
  };

  return (
    <div className="admin-home-container">
      <div className="admin-home-header">
        <h2>Bienvenido Administrador</h2>
      </div>

      <div className="admin-home-nav">
        <Link to="/manage-events">Gestionar Eventos</Link>
        <Link to="/manage-users">Gestionar Usuarios</Link>
        <Link to="/manage-catalog">Gestionar Catálogo</Link>
      </div>

      <div className="admin-home-content">
        <h3>Panel de Control del Administrador</h3>
        <p>Aquí puedes gestionar todos los aspectos de la plataforma.</p>
      </div>

      <button className="admin-home-logout" onClick={handleLogout}>
        Cerrar sesión
      </button>
    </div>
  );
};

export default AdminHome;
