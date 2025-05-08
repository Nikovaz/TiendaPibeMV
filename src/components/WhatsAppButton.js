import React from 'react';
import './SocialButtons.css';

const WhatsAppButton = () => {
  // Número de WhatsApp (reemplazar con el número real)
  const phoneNumber = '5491124566001';
  const message = 'Hola, me gustaría consultar por una reparación de celular';
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  
  return (
    <a 
      href={whatsappUrl} 
      className="social-float-button whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
    >
      <i className="fab fa-whatsapp"></i>
    </a>
  );
};

export default WhatsAppButton;