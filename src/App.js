import React from 'react';
import './App.css'; 
import ImageGallery from 'react-image-gallery'; 
import 'react-image-gallery/styles/css/image-gallery.css';
import Header from './components/Header';


const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "./static/1.jpg",
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
      <Header></Header>
      <ImageGallery items={images} />
    </div>
  );
}

export default App;
