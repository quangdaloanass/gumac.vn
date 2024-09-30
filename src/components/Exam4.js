import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa'; // Import icon trái tim
import './Exam4.css';

const products = [
  {
    id: 1,
    name: 'Quần suông chiết ly',
    code: 'QE09037',
    category: 'Quần Tây Ống Suông',
    price: '530.000 đ',
    imageUrl: 'https://js0fpsb45jobj.vcdn.cloud/storage/upload/media/gumac/VE08017/0-BE-VE08017.png',
  },
  {
    id: 2,
    name: 'Đầm xoắn ngực tay phồng',
    code: 'DE09033',
    category: 'Váy Đầm Công Sở',
    price: '520.000 đ',
    imageUrl: 'https://js0fpsb45jobj.vcdn.cloud/storage/upload/media/gumac3/ae08089/0.png',
  },
];

function Exam4() {
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
    <div className="exam-container-4">
      <div className="products-list-4">
        {products.map((product) => (
          <div key={product.id} className="product-4">
            <img src={product.imageUrl} alt={product.name} className="product-image-4" />
            <div className="product-info-4">
              <p className='product-name-4'>{product.name}</p>
              <p className='product-code-4'>{product.code}</p>
              <p className='product-category-4'>{product.category}</p>
              <p className="product-price-4">{product.price}</p>
              <div className="buttons-4">
                <button className="buy-button-4">Mua ngay</button>
                <button
                  className="wishlist-button-4"
                  onClick={() => handleWishlistClick(product.id)} // Chỉ định sản phẩm khi nhấn
                >
                  <FaHeart
                    className={`heart-icon-4 ${favoriteStatus[product.id] ? 'favorited' : 'not-favorited'}`}
                  />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="collection-banner-4">
        <button className="collection-button-4">
          <div className="collection-button-circle-4"></div>
          <span className="collection-button-text-4">XEM NGAY BỘ SƯU TẬP</span>
        </button>
        <img src="https://js0fpsb45jobj.vcdn.cloud/storage/upload/media/nam-moi-2024/31/1000x1333px.png" alt="Collection" className="banner-image-4" />
      </div>
    </div>
  );
}

export default Exam4;
