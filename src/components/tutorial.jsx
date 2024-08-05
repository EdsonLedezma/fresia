import React  from "react";
import './tutorial.css';
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

const Tutorial  = () => {
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
      
    return (
        <div>
            <h1 className="tuto"> Aprende a utlizar Fres IA para encontrar cada problema en tu vehículo</h1>
        <ImageGallery items={images} />
        </div>

    );
};

export default Tutorial;