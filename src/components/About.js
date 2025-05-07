import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="nosotros" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">Sobre Nosotros</h2>
            <p>Somos un equipo de técnicos especializados con más de 10 años de experiencia en la reparación de dispositivos móviles. En <strong>Matias Cell Repair</strong> nos comprometemos a ofrecer un servicio de calidad con garantía en todos nuestros trabajos.</p>
            <p>Utilizamos repuestos originales y herramientas profesionales para asegurar que tu dispositivo quede como nuevo. Nuestro objetivo es brindar soluciones rápidas y eficientes a precios justos.</p>
            <div className="about-features">
              <div className="feature">
                <i className="fas fa-check-circle"></i>
                <span>Técnicos certificados</span>
              </div>
              <div className="feature">
                <i className="fas fa-check-circle"></i>
                <span>Repuestos originales</span>
              </div>
              <div className="feature">
                <i className="fas fa-check-circle"></i>
                <span>Garantía en reparaciones</span>
              </div>
              <div className="feature">
                <i className="fas fa-check-circle"></i>
                <span>Servicio rápido</span>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="image-placeholder">
              <i className="fas fa-tools"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;