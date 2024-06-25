import logo from './logo.svg';
import React from 'react';
import './App.css'; // Estilo general de tu aplicación
import ImageGallery from 'react-image-gallery'; // Importa el componente de la librería

// Importa los estilos CSS de react-image-gallery (según la documentación)
import 'react-image-gallery/styles/css/image-gallery.css';

// Define las imágenes que mostrará la galería
const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
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

function App() {
  return (
    <div className="App">
      <ImageGallery items={images} />
    </div>
  );
}

export default App;
