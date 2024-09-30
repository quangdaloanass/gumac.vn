import React from 'react';
import './ImagePrice.css'; // Đường dẫn tới file CSS

const ImagePrice = () => {
    return (
        <div className="image-banner-container">
        <img 
            src="https://js0fpsb45jobj.vcdn.cloud/storage/upload/media/nam-moi-2024/31/129.png" 
            alt="Banner 1" 
            className="image-banner"
        />
        <img 
            src="https://js0fpsb45jobj.vcdn.cloud/storage/upload/media/nam-moi-2024/31/199.png" 
            alt="Banner 2" 
            className="image-banner"
        />
        <img 
            src="https://js0fpsb45jobj.vcdn.cloud/storage/upload/media/nam-moi-2024/31/299.png" 
            alt="Banner 3" 
            className="image-banner"
        />
    </div>
    );
};

export default ImagePrice;
