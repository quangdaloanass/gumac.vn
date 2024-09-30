import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <div className="hotline">
        <span>📞 Hotline đặt hàng 18006013</span>
      </div>
      <div className="header-links">
        <span>
          <img src="https://gumac.vn/static/media/ic_location_search_white.26c201fcfc57e79b93ea.svg" alt="icon" />
          Tra cứu tình trạng đơn hàng
        </span>
        <span>
          <img src="https://gumac.vn/static/media/ic_location_search_white.26c201fcfc57e79b93ea.svg" alt="icon" />
          Hệ thống Showroom
        </span>
        <div className="search-bar">
          <input type="text" placeholder="Tìm kiếm sản phẩm" />
          <img 
            className="search-icon" 
            src="data:image/png;base64,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" 
            alt="search-icon" />
        </div>
      </div>
    </div>
  );
}

export default Header;
