import React from 'react';
import './Home.css';
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

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

const Home = () => {
  return (
    <div>
    <div className="gallery-container">
        <ImageGallery items={images} />
      </div>
    <div className="container">
      
      <div className="card">
        <img src="/static/logofres.png" alt="Web" />
        <div className="content">
          <h2>Fazt Web</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam deserunt fuga accusantium excepturi quia, voluptates obcaecati nam in voluptas perferendis velit harum dignissimos quasi ex? Tempore repellat quo doloribus magnam.</p>
          <a href="#" className="button">Go to Fazt Web</a>
        </div>
      </div>
      <div className="card">
        <img src="https://via.placeholder.com/300x200?text=Blog" alt="Blog" />
        <div className="content">
          <h2>Fazt Blog</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam deserunt fuga accusantium excepturi quia, voluptates obcaecati nam in voluptas perferendis velit harum dignissimos quasi ex? Tempore repellat quo doloribus magnam.</p>
          <a href="#" className="button">Go to Fazt Blog</a>
        </div>
      </div>
      <div className="card">
        <img src="https://via.placeholder.com/300x200?text=Resources" alt="Resources" />
        <div className="content">
          <h2>Fazt Resources</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam deserunt fuga accusantium excepturi quia, voluptates obcaecati nam in voluptas perferendis velit harum dignissimos quasi ex? Tempore repellat quo doloribus magnam.</p>
          <a href="#" className="button">Go to Fazt Resources</a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Home;
