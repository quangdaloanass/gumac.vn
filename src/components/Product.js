import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Product.css';
import Modal from './Modal';
import ReactDOM from 'react-dom'; // Import ReactDOM để sử dụng Portals

const Notification = ({ message, isVisible, onClose }) => {
  if (!isVisible) return null;

  return ReactDOM.createPortal(
    <div className="notification show">
      <div className="notification-content">
        <img
          src="https://gumac.vn/static/media/ic_circle_checked_green.49490f440af088107b2a.svg"
          alt="Checked icon"
          className="notification-icon-product"
        />
        <span className="notification-text">{message}</span>
      </div>
    </div>,
    document.body // Render thông báo ra body của trang
  );
};

const Product = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState(product.colorImage1);
  const [isLiked, setIsLiked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [notification, setNotification] = useState('');
  const [isNotificationVisible, setIsNotificationVisible] = useState(false);

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  const toggleLike = () => {
    setIsLiked(!isLiked);
    setNotification(
      isLiked
        ? 'Bạn vừa xóa 1 sản phẩm khỏi mục yêu thích thành công!'
        : 'Bạn vừa thêm 1 sản phẩm vào mục yêu thích thành công!'
    );
    setIsNotificationVisible(true);
  
    // Ẩn thông báo sau 3 giây
    setTimeout(() => {
      setIsNotificationVisible(false);
    }, 3000);
  };

  const handleAddToCartClick = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="product-card-1">
      <div className="product-image-wrapper-1">
        <img src={product.image} alt={product.name} className="product-image-1" />
        <img src={product.hoverImage} alt={product.name + ' hover'} className="product-image-hover" />
        <img
          src="https://gumac.vn/static/media/ic_add_cart.5ee1758537c1384672e7.svg"
          alt="Add to cart"
          className="add-to-cart-icon"
          onClick={handleAddToCartClick}
        />

        {product.code !== 'GHI101' && product.id !== '4' && product.id !== '5' && (
          <div className="new-arrival-2">
            <span>Độc</span>
            <span>Quyền</span>
            <span>Online</span>
          </div>
        )}

        {/* Hiển thị Best Seller */}
        <div className={`best-seller-1 ${product.id !== '1' && product.id !== '2' && product.id !== '3' && product.id !== '6' && product.code !== 'GHI101' ? 'best-seller-higher' : ''}`}>
          Best Seller
        </div>

        <div className={`favorite-icon-1 ${isLiked ? 'liked' : ''}`} onClick={toggleLike}>
          <i className={isLiked ? 'fas fa-heart' : 'far fa-heart'}></i>
        </div>
      </div>

      <div className="product-details-1">
          <div className="product-color-1">
            {[product.colorImage1, product.colorImage2, product.colorImage3, product.colorImage4, product.colorImage5, product.colorImage6, product.colorImage7, product.colorImage8, product.colorImage9].map((colorImage, index) => (
              colorImage && (
                <div
                  key={index}
                  className={`product-color-image-wrapper ${selectedColor === colorImage ? 'active' : ''}`}
                  onClick={() => handleColorClick(colorImage)}
                >
                  <img src={colorImage} alt={`Color ${index + 1}`} className="product-color-image" />
                </div>
              )
            ))}
          </div>

        <h2 className="product-name-1">{product.name}</h2>
        <p className="product-code-1">Mã sản phẩm: {product.code}</p>

        <div className="product-price-wrapper">
          <p className="product-price-1">{product.price} đ</p>
          <p className="product-original-price">{product.originalPrice} đ</p>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={product}
        selectedColor={selectedColor}
      />

      {/* Hiển thị thông báo với hình ảnh */}
      <Notification
        message={notification}
        isVisible={isNotificationVisible}
        onClose={() => setIsNotificationVisible(false)}
      />
    </div>
  );
};

const Product2 = () => {
  const [products, setProducts] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [enteringIndex, setEnteringIndex] = useState(-1);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/products', {
          params: { ids: '1,2,3,4,5,6' } // Thay đổi danh sách ID theo nhu cầu
        });
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const visibleProducts = products.slice(startIndex, startIndex + 5);

  const handleNextClick = () => {
    if (startIndex + 5 < products.length) {
      setEnteringIndex(startIndex + 5);
      setStartIndex(prev => prev + 1);
    }
  };

  const handlePrevClick = () => {
    if (startIndex > 0) {
      setEnteringIndex(startIndex - 1);
      setStartIndex(prev => prev - 1);
    }
  };

  return (
    <div className="product-list-wrapper">
      <button onClick={handlePrevClick} className="prev-btn">
        <img
          src="https://cdn.icon-icons.com/icons2/930/PNG/96/arrow-left_icon-icons.com_72376.png"
          alt="Previous"
          className="arrow-icon"
        />
      </button>
      <div className="product-list">
        {visibleProducts.map((product, index) => (
          <Product key={index} product={product} className={enteringIndex === index ? 'enter' : ''} />
        ))}
      </div>
      <button onClick={handleNextClick} className="next-btn">
        <img
          src="https://cdn.icon-icons.com/icons2/930/PNG/512/arrow-right_icon-icons.com_72375.png"
          alt="Next"
          className="arrow-icon"
        />
      </button>
    </div>
  );
};

export default Product2;
