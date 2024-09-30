import React, { useState, useEffect } from 'react';
import './Exam5.css';

function Exam5() {
  const [height, setHeight] = useState(145);
  const [weight, setWeight] = useState(38);
  const [size, setSize] = useState('XS');
  const [selectedCategory, setSelectedCategory] = useState('Quần Dài'); // Bắt đầu với Quần Dài được chọn

  const handleHeightChange = (e) => {
    const newHeight = e.target.value;
    setHeight(newHeight);

    // Kiểm tra chiều cao và cân nặng để tự động cập nhật size
    if (newHeight >= 200 && weight >= 100) {
      setSize('XL');
    } else {
      // Có thể thêm logic khác để thay đổi size dựa trên chiều cao và cân nặng
      updateSize(newHeight, weight);
    }
  };

  const handleWeightChange = (e) => {
    const newWeight = e.target.value;
    setWeight(newWeight);

    // Kiểm tra chiều cao và cân nặng để tự động cập nhật size
    if (height >= 200 && newWeight >= 100) {
      setSize('XL');
    } else {
      // Có thể thêm logic khác để thay đổi size dựa trên chiều cao và cân nặng
      updateSize(height, newWeight);
    }
  };

  const updateSize = (height, weight) => {
    // Thay đổi size dựa trên chiều cao và cân nặng
    if (height < 160 && weight < 50) {
      setSize('XS');
    } else if (height < 170 && weight < 60) {
      setSize('S');
    } else if (height < 180 && weight < 70) {
      setSize('M');
    } else if (height < 190 && weight < 80) {
      setSize('L');
    } else {
      setSize('XL');
    }
  };

  const handleSizeClick = (size) => {
    setSize(size);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category); // Cập nhật loại sản phẩm được chọn
  };

  return (
    <div className="exam5-container">
      <div className="content">
        <div className="product-category">
          <h3>DANH MỤC SẢN PHẨM QUAN TÂM</h3>
          <div className="category-buttons">
            {/* Hàng 1 */}
            {['Quần Dài', 'Chân Váy', 'Quần Short'].map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                style={{
                  backgroundColor: selectedCategory === category ? '#a8d8ea' : 'white', // Màu xanh nhạt nếu được chọn
                  color: selectedCategory === category ? 'black' : 'black' // Màu chữ
                }}
              >
                <img
                  src={
                    category === 'Quần Dài'
                      ? 'https://js0fpsb45jobj.vcdn.cloud/storage/upload/media/trousers.png'
                      : category === 'Chân Váy'
                      ? 'https://js0fpsb45jobj.vcdn.cloud/storage/upload/media/clothes.png'
                      : 'https://js0fpsb45jobj.vcdn.cloud/storage/upload/media/shorts.png'
                  }
                  alt={category}
                />
                {category}
              </button>
            ))}

            {/* Hàng 2 */}
            {['Áo Thun', 'Áo Nữ', 'Váy Nữ'].map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                style={{
                  backgroundColor: selectedCategory === category ? '#a8d8ea' : 'white', // Màu xanh nhạt nếu được chọn
                  color: selectedCategory === category ? 'black' : 'black' // Màu chữ
                }}
              >
                <img
                  src={
                    category === 'Áo Thun'
                      ? 'https://js0fpsb45jobj.vcdn.cloud/storage/upload/media/tshirt.png'
                      : category === 'Áo Nữ'
                      ? 'https://js0fpsb45jobj.vcdn.cloud/storage/upload/media/shirt.png'
                      : 'https://js0fpsb45jobj.vcdn.cloud/storage/upload/media/dress.png'
                  }
                  alt={category}
                />
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="measurement">
          <div className="height">
            <div className="label-and-value">
              <label>Chiều cao</label>
              <span>{height}cm</span>
            </div>
            <input type="range" min="100" max="200" value={height} onChange={handleHeightChange} />
          </div>

          <div className="weight">
            <div className="label-and-value">
              <label>Cân nặng</label>
              <span>{weight}kg</span>
            </div>
            <input type="range" min="30" max="100" value={weight} onChange={handleWeightChange} />
          </div>
        </div>

        <div className="suggested-size">
          <h4>SIZE GỢI Ý</h4>
          <div className="size-buttons">
            {['XS', 'S', 'M', 'L', 'XL'].map((s) => (
              <button key={s} onClick={() => handleSizeClick(s)} className={size === s ? 'active' : ''}>
                {s}
              </button>
            ))}
          </div>
        </div>

        <div className="search-container">
          <button className="arrow-button">
            <span>&#8599;</span> {/* Biểu tượng mũi tên lên góc phải */}
          </button>
          <button className="search-button">TÌM KIẾM SẢN PHẨM</button>
        </div>
      </div>

      <div className="image-container">
        <img src="https://js0fpsb45jobj.vcdn.cloud/storage/upload/media/nam-moi-2024/31/tu-van-size.png" alt="Tư vấn chọn size" />
      </div>
    </div>
  );
}

export default Exam5;
