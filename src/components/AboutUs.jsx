import React from 'react';
import './AboutUs.css';
 // Asegúrate de tener esta imagen en la ruta correcta

const AboutUs = () => {
  return (
    <div className="about-us">
    

      <div className="jumbotron">
        <h2>Nuestra Misión</h2>
        <p>Proveer soluciones tecnológicas que mejoren la vida de las personas y transformen la industria.</p>
      </div>

      <div className="cards-container">
        <div className="card">
          <h3>Innovación</h3>
          <p>Desarrollamos tecnología de vanguardia para mantener a nuestros clientes a la cabeza de la competencia.</p>
        </div>
        <div className="card">
          <h3>Calidad</h3>
          <p>Nuestros productos y servicios están diseñados con el más alto estándar de calidad para asegurar su éxito.</p>
        </div>
        <div className="card">
          <h3>Compromiso</h3>
          <p>Nos comprometemos a cumplir con nuestras promesas y a exceder las expectativas de nuestros clientes.</p>
        </div>
      </div>
      <div className="jumbotron">
        <h2>Nuestra vision</h2>
        <p>Proveer soluciones tecnológicas que mejoren la vida de las personas y transformen la industria.</p>
      </div>
    </div>
  );
}

export default AboutUs;
