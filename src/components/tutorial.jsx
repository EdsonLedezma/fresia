import React  from "react";
import './tutorial.css';
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

const Tutorial  = () => {
    const images = [
        {
          original: "./static/t1.png",
          thumbnail: "./static/t1.png",
        },
        {
          original: "./static/t2.png",
          thumbnail: "./static/t2.png",
        },
        {
          original: "./static/t3.png",
          thumbnail: "./static/t3.png",
        },
      ];
      
    return (
        <div>
            <h1 className="tuto"> Aprende a utlizar Fres IA para encontrar cada problema en tu vehículo</h1>
        <ImageGallery items={images} />
        </div>

    );
};

export default Tutorial;