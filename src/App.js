import React, { useEffect } from 'react';
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
  useEffect(() => {
    console.log('App montado correctamente');
  }, []);

  return (
    <div className="App">
      <Header />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
      <WhatsAppButton />
      <InstagramButton />
    </div>
  );
}

export default App;