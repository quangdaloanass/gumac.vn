import React from 'react';
import './ImageLayout.css'; // Import file CSS

const ImageLayout = () => {
  return (
    <div className="container-layout">
      <div className="left-image-layout">
        <img src="https://js0fpsb45jobj.vcdn.cloud/storage/upload/media/trang-chu/1000x752-2.jpg" alt="Left" />
      </div>
      <div className="right-images-layout">
        <img src="https://js0fpsb45jobj.vcdn.cloud/storage/upload/media/trang-chu/1000x419.jpg" alt="Right 1" />
        <img src="https://js0fpsb45jobj.vcdn.cloud/storage/upload/media/trang-chu/1000x419-2.jpg" alt="Right 2" />
      </div>
    </div>
  );
};

export default ImageLayout;
