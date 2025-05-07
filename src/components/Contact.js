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
                <p>Av. Principal 1234, Ciudad</p>
              </div>
            </div>
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <div>
                <h3>Teléfono</h3>
                <p>+54 11 1234-5678</p>
              </div>
            </div>
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <div>
                <h3>Email</h3>
                <p>contacto@matiascell.com</p>
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
          <div className="contact-form-container">
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Nombre</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Teléfono</label>
                <input type="tel" id="phone" name="phone" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Mensaje</label>
                <textarea id="message" name="message" rows="5" required></textarea>
              </div>
              <button type="submit" className="btn">Enviar Mensaje</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;