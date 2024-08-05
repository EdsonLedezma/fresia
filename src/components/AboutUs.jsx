import React from 'react';
import './AboutUs.css';
 // Asegúrate de tener esta imagen en la ruta correcta

const AboutUs = () => {
  return (
    <div className="about-us">
    

      <div className="jumbotron">
        <h2>Nuestra Misión</h2>
        <p>Ayudamos a mecánicos y propietarios de automóviles con el diagnóstico de fallas automotrices, ofreciendo una forma fácil y rápida de encontrar soluciones eficientes.</p>
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
        <h2>Nuestra visión</h2>
        <p>Esperamos estar liderando el mercado en 10 años, trabajando junto a diferentes empresas automotrices.</p>
      </div>
    </div>
  );
}

export default AboutUs;
