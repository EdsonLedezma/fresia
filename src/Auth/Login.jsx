import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Login.css'; 
import { auth } from './Conect'; // Importa la configuración de Firebase
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = useState(null);

  useEffect(() => {
    if (location.state && location.state.message) {
      setSuccessMessage(location.state.message);
    }
  }, [location]);

  const handleRegisterClick = () => {
    navigate('/registro');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Inicia sesión en Firebase Auth
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Usuario autenticado
        const user = userCredential.user;
        console.log('Usuario autenticado:', user);
        // Aquí puedes redirigir al usuario a la página principal o a otra página de tu aplicación
        navigate('/');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
        console.error('Error iniciando sesión:', errorCode, errorMessage);
      });
  };

  return (
    <div className="login-container">
      <div className="login-logo">
        <img src="/static/logofres.png" alt="Company Logo" />
      </div>
      <div className="login-form">
        <h2>Iniciar Sesión</h2>
        {successMessage && <p className="success-message">{successMessage}</p>}
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label htmlFor="email">Correo Electrónico</label>
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
          <button className="login-submit-button" type="submit">Iniciar Sesión</button>
        </form>
        <p>No tienes una cuenta? Registrate</p>
        <button className="login-register-button" onClick={handleRegisterClick}>Registrarse</button>
      </div>
    </div>
  );
}

export default Login;
