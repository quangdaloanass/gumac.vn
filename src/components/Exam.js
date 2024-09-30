import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios để gọi API
import { FaHeart } from 'react-icons/fa';
import Modal from './Modal'; // Import Modal
import './Exam.css';

function Exam() {
  // Khởi tạo trạng thái sản phẩm và trạng thái yêu thích
  const [products, setProducts] = useState([]);
  const [favoriteStatus, setFavoriteStatus] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false); // Trạng thái mở/đóng modal
  const [selectedProduct, setSelectedProduct] = useState(null); // Sản phẩm đã chọn

  // Gọi API lấy danh sách sản phẩm từ server
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/products', {
          params: { ids: '7,8' } // Thay đổi danh sách ID theo nhu cầu
        });
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleWishlistClick = (productId) => {
    // Cập nhật trạng thái yêu thích của sản phẩm tương ứng
    setFavoriteStatus((prevState) => ({
      ...prevState,
      [productId]: !prevState[productId],
    }));
  };

  const handleBuyNowClick = (product) => {
    // Mở modal và lưu sản phẩm đã chọn
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Đóng modal
    setSelectedProduct(null); // Xóa sản phẩm đã chọn
  };

  return (
    <div className="exam-container">
      <div className="products-list-1">
        {products.map((product) => (
          <div key={product.id} className="product-1">
            <img src={product.image} alt={product.name} className="product-image-2" />
            <div className="product-info">
              <p className='product-name'>{product.name}</p>
              <p className='product-code'>{product.code}</p>
              <p className='product-category'>{product.category}</p>
              <p className="product-price">{product.price}</p>
              <div className="buttons">
                <button className="buy-button" onClick={() => handleBuyNowClick(product)}>
                  Mua ngay
                </button>
                <button
                  className="wishlist-button"
                  onClick={() => handleWishlistClick(product.id)} // Chỉ định sản phẩm khi nhấn
                >
                  <FaHeart
                    className={`heart-icon ${favoriteStatus[product.id] ? 'favorited' : 'not-favorited'}`}
                  />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="collection-banner">
        <button className="collection-button">
          <div className="collection-button-circle"></div>
          <span className="collection-button-text">XEM NGAY BỘ SƯU TẬP</span>
        </button>
        <img src="https://js0fpsb45jobj.vcdn.cloud/storage/upload/media/nam-moi-2024/31/1000x1253px.png" alt="Collection" className="banner-image" />
      </div>

      {/* Hiển thị Modal khi modal được mở */}
      {isModalOpen && selectedProduct && (
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          product={selectedProduct}
        />
      )}
    </div>
  );
}

export default Exam;
