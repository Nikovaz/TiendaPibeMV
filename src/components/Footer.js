import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h2>Matias</h2>
            <p>Reparación de Celulares</p>
          </div>
          <div className="footer-links">
            <h3>Enlaces Rápidos</h3>
            <ul>
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#servicios">Servicios</a></li>
              <li><a href="#nosotros">Nosotros</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </div>
          <div className="footer-services">
            <h3>Servicios</h3>
            <ul>
              <li>Cambio de Pantalla</li>
              <li>Reparación de Batería</li>
              <li>Problemas de Software</li>
              <li>Daños por Agua</li>
            </ul>
          </div>
          <div className="footer-social">
            <h3>Síguenos</h3>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Matias Cell Repair. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;