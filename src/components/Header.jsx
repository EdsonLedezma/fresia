import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';



const Header = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleSignUpClick = () => {
    navigate('/registro');
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <a href="/">
            <img src="./static/logoHeader.png" alt="Logo" />
          </a>
        </div>
        <nav className="nav">
          <ul>
            <li>
              <a href="/">Inicio</a>
            </li>
            <li>
              <a href="/features">Conocenos</a>
            </li>
            <li>
              <a href="/pricing">Asistente</a>
            </li>
            <li>
              <a href="/faqs">Tutoriales</a>
            </li>
            <li>
              <a href="/about">Estadisticas</a>
            </li>
          </ul>
        </nav>
        <div className="actions">
          <button className="login" onClick={handleLoginClick}>Login</button>
          <button className="signup" onClick={handleSignUpClick}>Sign-up</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
