import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    console.log('App montado correctamente');
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Matias Cell Repair</h1>
        <p>Servicio técnico de celulares</p>
      </header>
      <main className="container">
        <section>
          <h2 className="section-title">¡Sitio en construcción!</h2>
          <p>Estamos trabajando para ofrecerte el mejor servicio de reparación de celulares.</p>
          <p>Contacta con nosotros a través de WhatsApp o Instagram.</p>
          <div className="buttons">
            <a href="https://wa.me/5491112345678" className="btn">WhatsApp</a>
            <a href="https://instagram.com/matiascellrepair" className="btn">Instagram</a>
          </div>
        </section>
      </main>
      <footer>
        <p>&copy; 2025 Matias Cell Repair - Todos los derechos reservados</p>
      </footer>
    </div>
  );
}

export default App;