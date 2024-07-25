import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';
import { auth } from './Conect'; // Importa la configuración de Firebase
import { createUserWithEmailAndPassword } from "firebase/auth";

const Registro = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Crea el usuario en Firebase Auth
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Usuario registrado
        const user = userCredential.user;
        console.log('Usuario registrado:', user);
        // Aquí puedes agregar lógica adicional, como guardar el nombre de usuario en una base de datos
        // Redirigir al usuario a la página de inicio de sesión con un mensaje
        navigate('/login', { state: { message: 'Registro exitoso, ahora inicie sesión.' } });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
        console.error('Error registrando el usuario:', errorCode, errorMessage);
      });
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
            <label htmlFor="username">Nombre de Usuario</label>
            <input 
              type="text" 
              id="username" 
              name="username" 
              required 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-container">
            <label htmlFor="email">Correo</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              required 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-container">
            <label htmlFor="password">Contraseña</label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              required 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button className="register-submit-button" type="submit">Registrarse</button>
        </form>
      </div>
    </div>
  );
}

export default Registro;
