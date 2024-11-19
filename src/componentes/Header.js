import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <header>
    <img src="../img/logo.png" alt="SUNSUCA Logo" className="logo" />
    <nav>
      <a href="#services">Servicios</a>
      <a href="#about">Nosotros</a>
      <a href="#gallery">Galería</a>
      <a href="#contact">Contacto</a>
      <Link to="/login">Iniciar Sesión</Link>
      <Link to="/register">Registrarse</Link>
    </nav>
  </header>
);

export default Header;
