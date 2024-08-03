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
import Frenchi from './components/Frenchi';
import Tutorial from './components/tutorial';
import Estadisticas from './components/Estadisticas';


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
            <Route path="/frenchi" element={<Frenchi />} />
            <Route path="/tutoriales" element={<Tutorial />} />
            <Route path="/estadisticas" element={<Estadisticas />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}


const Layout = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/frenchi" element={<Frenchi />} />
        <Route path="/tutoriales" element={<Tutorial />} />
        <Route path="/estadisticas" element={<Estadisticas />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
