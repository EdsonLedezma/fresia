import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Importa tus estilos personalizados para el Login

const Login = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate('/registro');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí podrías agregar la lógica para manejar el inicio de sesión
    // Por ejemplo, podrías enviar los datos al servidor, etc.
  };

  return (
    <div className="login-container">
      <div className="login-logo">
        <img src="/static/logofres.png" alt="Company Logo" />
      </div>
      <div className="login-form">
        <h2>Iniciar Sesión</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label htmlFor="username">Usuario</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div className="input-container">
            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" name="password" required />
          </div>
        <button className="login-submit-button" type="submit">Iniciar Sesión</button>
        </form>
        <button className="login-register-button" onClick={handleRegisterClick}>Registrarse</button>
      </div>
    </div>
  );
}

export default Login;
