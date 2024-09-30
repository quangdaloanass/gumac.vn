import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa'; // Import icon trái tim
import './Exam2.css';

const products = [
  {
    id: 1,
    name: 'Đầm xòe phối lá cổ DE08059',
    category: 'Váy Đầm Dự Tiệc',
    price: '625.500 đ',
    imageUrl: 'https://js0fpsb45jobj.vcdn.cloud/storage/upload/media/gumac/DE08059/0-NAU-DE08059.png',
  },
  {
    id: 2,
    name: 'Đầm A phối cổ tơ hoa DE08004',
    category: 'Váy Đầm Công Sở',
    price: '299.000 đ',
    imageUrl: 'https://js0fpsb45jobj.vcdn.cloud/storage/upload/media/gumac/DE08004/0-DEN-DE08004.png',
  },
];

function Exam() {
  // Sử dụng một object để theo dõi trạng thái của từng sản phẩm
  const [favoriteStatus, setFavoriteStatus] = useState(
    products.reduce((acc, product) => {
      acc[product.id] = false; // Mặc định tất cả sản phẩm chưa được yêu thích
      return acc;
    }, {})
  );

  const handleWishlistClick = (productId) => {
    // Cập nhật trạng thái yêu thích của sản phẩm tương ứng
    setFavoriteStatus((prevState) => ({
      ...prevState,
      [productId]: !prevState[productId],
    }));
  };

  return (
    <div className="exam-container2">
      <div className="products-list2">
        {products.map((product) => (
          <div key={product.id} className="product2">
            <img src={product.imageUrl} alt={product.name} className="product-image2" />
            <div className="product-info2">
              <p className='product-name2'>{product.name}</p>
              <p className='product-code2'>{product.code}</p>
              <p className='product-category2'>{product.category}</p>
              <p className="product-price2">{product.price}</p>
              <div className="buttons2">
                <button className="buy-button2">Mua ngay</button>
                <button
                  className="wishlist-button2"
                  onClick={() => handleWishlistClick(product.id)} // Chỉ định sản phẩm khi nhấn
                >
                  <FaHeart
                    className={`heart-icon2 ${favoriteStatus[product.id] ? 'favorited' : 'not-favorited'}`}
                  />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="collection-banner2">
        <button className="collection-button2">
          <div className="collection-button-circle2"></div>
          <span className="collection-button-text2">XEM NGAY BỘ SƯU TẬP</span>
        </button>
        <img src="https://js0fpsb45jobj.vcdn.cloud/storage/upload/media/gumac3/aa610/1000x910-2.png" alt="Collection" className="banner-image2" />
      </div>
    </div>
  );
}

export default Exam;
