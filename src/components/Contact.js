import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contacto" className="contact">
      <div className="container">
        <h2 className="section-title">Contacto</h2>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <h3>Dirección</h3>
                <p>Pirovano 1838, Jose.c paz</p>
                <p> Buenos Aires, Argentina</p>
              </div>
            </div>
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <div>
                <h3>Teléfono</h3>
                <p>+54 11 2456-6001</p>
              </div>
            </div>
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <div>
                <h3>Email</h3>
                <p>contactoDelPibe@matiascell.com</p>
              </div>
            </div>
            <div className="contact-item">
              <i className="fas fa-clock"></i>
              <div>
                <h3>Horario</h3>
                <p>Lunes a Viernes: 9:00 - 18:00</p>
                <p>Sábados: 10:00 - 14:00</p>
              </div>
            </div>
          </div>
        
        </div>
      </div>
    </section>
  );
};

export default Contact;