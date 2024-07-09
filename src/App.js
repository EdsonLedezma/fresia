import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'; 
import "react-image-gallery/styles/css/image-gallery.css";
import Login from './Auth/Login';
import Register from './Auth/Register';
import Header from './components/Header';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer'; 

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Register />} />
            <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about-us" element={<AboutUs />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

// Componente Layout para envolver el Header, Footer y contenido principal
const Layout = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
