import React from 'react';
import './Register.css'; // Importa tus estilos personalizados para el Registro

const Registro = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí podrías agregar la lógica para manejar el registro de usuario
    // Por ejemplo, podrías enviar los datos al servidor, etc.
  };

  return (
    <div className="registro-container">
      <div className="registro-logo">
        <img src="/static/logofres.png" alt="Company Logo" />
      </div>
      <div className="registro-form">
        <h2>Registro</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label htmlFor="fullname">Nombre Completo</label>
            <input type="text" id="fullname" name="fullname" required />
          </div>
          <div className="input-container">
            <label htmlFor="username">Nombre de Usuario</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div className="input-container">
            <label htmlFor="email">Correo</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="input-container">
            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button className="register-submit-button" type="submit">Registrarse</button>
        </form>
      </div>
    </div>
  );
}

export default Registro;
