import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <h1>Matias</h1>
          <p>Reparación de Celulares</p>
        </div>
        <div className={`menu-icon ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav className={`nav ${menuOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            <li><a href="#inicio" onClick={() => setMenuOpen(false)}>Inicio</a></li>
            <li><a href="#servicios" onClick={() => setMenuOpen(false)}>Servicios</a></li>
            <li><a href="#nosotros" onClick={() => setMenuOpen(false)}>Nosotros</a></li>
            <li><a href="#contacto" onClick={() => setMenuOpen(false)}>Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;