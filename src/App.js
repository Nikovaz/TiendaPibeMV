import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import InstagramButton from './components/InstagramButton';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    console.log('App montado correctamente');
    // Marcamos que la aplicación está cargada después de un breve retardo
    const timer = setTimeout(() => {
      setIsLoaded(true);
      console.log('App marcado como cargado');
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {!isLoaded ? (
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          height: '100vh', 
          color: 'white',
          backgroundColor: '#000'
        }}>
          <h1>Cargando...</h1>
        </div>
      ) : (
        <>
          <Header />
          <Hero />
          <Services />
          <About />
          <Contact />
          <Footer />
          <WhatsAppButton />
          <InstagramButton />
        </>
      )}
    </div>
  );
}

export default App;