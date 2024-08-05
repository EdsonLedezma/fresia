import React from 'react';
import './Home.css';
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";


const images = [
  {
    original: "./static/11.jpg",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

const Home = () => {
  return (
    <div>
       <div className="about-us">
      <div className="hero-section">
        <img src="/static/collage.jpg" alt="Hero" className="hero-image" />
        <div className="hero-text">
          <h1>Bienvenido a FRES IA</h1>
          <p>La inteligencia que tu auto necesita</p>
        </div>
      </div>
      </div>
   
    <div className="container">
            <div className="card">
        <img src="static\image.png" alt="Blog" />
        <div className="content">
          <h2>Desempeño perfecto, gracias a la IA</h2>
          <p> FRES IA analiza patrones de sonido 
            que son imperceptibles para el oído humano, identificando 
            anomalías y posibles fallas mecánicas con una impresionante 
            precisión, aseguramos un proceso de diagnóstico continuo y en 
            tiempo real, lo que permite un mantenimiento preventivo y 
            correctivo confiable para los conductores y mecánicos,
            si tienes dudas comprueba nuestras estadísticas.</p>
          <a href="/estadisticas" className="button">Estadísticas aqui</a>
        </div>
      </div>
      <div className="card">
        <img src="static/IAauto.jpg" alt="Resources" />
        <div className="content">
          <h2>Asistencia inteligente, autos sin problemas</h2>
          <p>Puedes preguntarle cualquier duda a nuestro asistente mecánico Frenchi,
            desde como realizar un cambio de aceite, especificaciones técnicas de tu vehículo,
            consejos de conducción, reglas de tránsito o cualquier cosa que tenga que ver con el
            ámbito automotriz.

          </p>
          <a href="/frenchi" className="button">Conoce a Frenchi</a>
        </div>
      </div>
      <div className="card">
        <img src="/static/logofres.png" alt="Web" />
        <div className="content">
          <h2>Con FRES IA, cada sonido cuenta</h2>
          <p>Si durante tu conducción diaria comienzas a escuchar
             un nuevo ruido en tu auto no lo dejes pasar, podría 
             no ser importante o ser síntoma de un posible desajuste
             mecánico, no corras el riesgo de sufrir una 
             falla con el paso del tiempo, si te interesa aprender a 
             usar Fres IA tenemos un tutorial completo aquí.</p>
          <a href="/tutoriales" className="button">Tutorial aqui</a>
        </div>
      </div>
    </div>
    <div className="gallery-container">
        <ImageGallery items={images} />
      </div>
    </div>
  );
};

export default Home;
