import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Sobre Nosotros</h4>
          <p>Somos una empresa dedicada a ofrecer soluciones tecnológicas innovadoras.</p>
        </div>
        <div className="footer-section">
          <h4>Navegación</h4>
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/about-us">Conócenos</a></li>
            <li><a href="/frenchi">Asistente</a></li>
            <li><a href="/tutoriales">Tutoriales</a></li>
            <li><a href="/estadisticas">Estadísticas</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contacto</h4>
          <p>Email: contacto@utch.edu.mx</p>
          <p>Teléfono: +52 614 432 20 00</p>
          <p>Dirección: Av. Montes Americanos #9501, Col. Sector 35, C.P. 31216, Chihuahua, Chih., México.</p>
        </div>
        <div className="footer-section">
          <h4>Síguenos</h4>
          <div className="social-links">
            <a href="https://www.facebook.com/utchoficial" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://wa.me/526145036731" target="_blank" rel="noopener noreferrer">WhatsApp</a>
            <a href="https://www.instagram.com/utch_oficial/" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Empresa. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
