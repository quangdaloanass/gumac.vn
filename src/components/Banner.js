import React, { useState, useEffect } from 'react';
import './Banner.css';

function Banner() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    'https://js0fpsb45jobj.vcdn.cloud/storage/upload/media/nam-moi-2024/19/pc-1600x635.jpg',
    'https://js0fpsb45jobj.vcdn.cloud/storage/upload/media/nam-moi-2024/19/1600x635.jpg',
    'https://js0fpsb45jobj.vcdn.cloud/storage/upload/media/nam-moi-2024/31/pc-1600x635.jpg',
  ];

  // Tự động chuyển ảnh mỗi 1 giây
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 10000); // 1 giây

    return () => clearInterval(interval); // Clear interval khi component unmount
  }, [images.length]);

  const handleSelectImage = (index) => {
    setCurrentImage(index);
  };

  return (
    <div className="banner">
      <img src={images[currentImage]} alt={`Slide ${currentImage + 1}`} />
      <div className="controls">
        {images.map((_, index) => (
          <button
            key={index}
            className={currentImage === index ? 'active' : ''}
            onClick={() => handleSelectImage(index)}
          >
            &#8226; {/* Ký tự dấu chấm */}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Banner;
