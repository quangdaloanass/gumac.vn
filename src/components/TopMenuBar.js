import React from 'react';
import './TopMenuBar.css';

const TopMenuBar = () => {
  return (
    <div className="top-menu-bar">
      <ul className="menu-links">
        <li>
          <img 
            className="logo-icon" 
            src="https://js0fpsb45jobj.vcdn.cloud/storage/upload/media/logo/gumac-headerlogo.svg" 
            alt="Logo" 
          />
          <a href="#">HÀNG MỚI VỀ</a>
        </li>
        <li><a href="#">BST ELEGANT STYLE</a></li>
        <li><a href="#">BỘ SƯU TẬP</a></li>
        <li><a href="#">THỜI TRANG</a></li>
        <li><a href="#">SALE OFF</a></li>
        <li><a href="#">ĐỘC QUYỀN ONLINE</a></li>
      </ul>
      <div className="menu-icons">
        <a href="#">
          <img src="https://gumac.vn/static/media/ic_user_black.248b81780a1aca220688.svg" alt="User Icon" />
        </a>
        <a href="#">
          <img src="https://gumac.vn/static/media/ic_heart_black.c598357d1fc15bfdc8a6.svg" alt="Heart Icon" />
        </a>
        <a href="#">
          <img src="https://gumac.vn/static/media/ic_cart_black.924e1a1ec0eaa8f5feab.svg" alt="Cart Icon" />
        </a>
      </div>
    </div>
  );
};

export default TopMenuBar;
