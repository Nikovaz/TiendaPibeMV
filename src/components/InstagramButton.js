import React from 'react';
import './SocialButtons.css';

const InstagramButton = () => {
  // Perfil de Instagram (reemplazar con el perfil real)
  const instagramProfile = 'https://instagram.com/matiascellrepair';
  
  return (
    <a 
      href={instagramProfile} 
      className="social-float-button instagram-button"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Seguir en Instagram"
    >
      <i className="fab fa-instagram"></i>
    </a>
  );
};

export default InstagramButton;