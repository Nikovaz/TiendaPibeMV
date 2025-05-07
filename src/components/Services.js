import React from 'react';
import './Services.css';

const Services = () => {
  const servicesList = [
    {
      id: 1,
      icon: 'fa-mobile-screen',
      title: 'Cambio de Pantalla',
      description: 'Reemplazo de pantallas dañadas o rotas para todo tipo de dispositivos móviles.'
    },
    {
      id: 2,
      icon: 'fa-battery-full',
      title: 'Cambio de Batería',
      description: 'Sustitución de baterías agotadas o defectuosas para mejorar la duración y rendimiento.'
    },
    {
      id: 3,
      icon: 'fa-camera',
      title: 'Reparación de Cámara',
      description: 'Arreglo de cámaras frontales y traseras que no funcionan correctamente.'
    },
    {
      id: 4,
      icon: 'fa-droplet',
      title: 'Daños por Agua',
      description: 'Recuperación de dispositivos con daños por agua o líquidos.'
    },
    {
      id: 5,
      icon: 'fa-microchip',
      title: 'Problemas de Software',
      description: 'Solución de problemas de sistema operativo, actualizaciones y fallos de software.'
    },
    {
      id: 6,
      icon: 'fa-plug',
      title: 'Puerto de Carga',
      description: 'Reparación de puertos de carga dañados o que no cargan correctamente.'
    }
  ];

  return (
    <section id="servicios" className="services">
      <div className="container">
        <h2 className="section-title">Nuestros Servicios</h2>
        <div className="services-grid">
          {servicesList.map((service) => (
            <div className="service-card" key={service.id}>
              <div className="service-icon">
                <i className={`fas ${service.icon}`}></i>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;