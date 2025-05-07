import React from 'react';
import './Hero.css';
import brokenPhoneImage from '../assets/images/broken-phone.svg';

const Hero = () => {
  return (
    <section id="inicio" className="hero" style={{ '--broken-phone-bg': `url(${brokenPhoneImage})` }}>
      <div className="hero-content">
        <h1>Servicio Técnico de Celulares</h1>
        <h2>Reparación Profesional y Rápida</h2>
        <p>Expertos en reparación de todas las marcas y modelos</p>
        <div className="hero-buttons">
          <a href="#servicios" className="btn">Nuestros Servicios</a>
          <a href="#contacto" className="btn btn-outline">Contáctanos</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;