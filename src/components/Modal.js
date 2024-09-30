import React, { useState } from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, product }) => {
  const [productQuantity, setProductQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [mainImage, setMainImage] = useState(product.image);
  const [startIndex, setStartIndex] = useState(0);

  if (!isOpen) return null;

  const colorImages = [
    product.colorImage1,
    product.colorImage2,
    product.colorImage3,
    product.colorImage4,
    product.colorImage5,
    product.colorImage6,
    product.colorImage7,
    product.colorImage8,
    product.colorImage9
  ].filter(Boolean);

  const additionalImages = product.images && Array.isArray(product.images) ? product.images : [];

  const handleIncrease = () => {
    setProductQuantity(productQuantity + 1);
  };

  const handleDecrease = () => {
    if (productQuantity > 1) {
      setProductQuantity(productQuantity - 1);
    }
  };

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const handleColorClick = (index) => {
    setSelectedColorIndex(index);
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const handleThumbnailClick = (image, index) => {
    setMainImage(image);

    // Move clicked image to the end and update startIndex
    const newImages = [...additionalImages];
    newImages.push(newImages.splice(startIndex + index, 1)[0]);
    setStartIndex(startIndex < newImages.length - 3 ? startIndex + 1 : 0);
    product.images = newImages;
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        
        <div className="modal-body">
          <div className="additional-images">
            {additionalImages.slice(startIndex, startIndex + 3).map((image, index) => (
              <img 
                key={index} 
                src={image} 
                alt={`Additional ${index + 1}`} 
                className="additional-image" 
                onClick={() => handleThumbnailClick(image, index)}
              />
            ))}
          </div>

          <img src={mainImage} alt={product.name} className="modal-product-image" />

          <div className="product-details">
            <h2 className="product-name-modal">{product.name}</h2>
            <div className="product-code-rating">
              <p>{product.code}</p>
              <div className="rating-status">
                <div className="rating">
                  {'★'.repeat(product.rating)}{'☆'.repeat(5 - product.rating)}
                </div>
                {product.status && (
                  <p className={`product-status ${product.status === 'Hết hàng' ? 'out-of-stock' : ''}`}>
                    {product.status}
                  </p>
                )}
              </div>
            </div>

            <div className="product-price-modal">
              <p className="price-red">{product.price} đ</p>
              {product.originalPrice && (
                <p className="original-price">{product.originalPrice} đ</p>
              )}
            </div>

            <div className="product-sizes">
              <div className="size-header">
                <p>Kích thước</p>
                <a href="#" className="size-guide">Hướng dẫn chọn size</a>
              </div>
              <div className="size-options">
                {product.sizes.map((size, index) => (
                  <span
                    key={index}
                    className={`size ${selectedSize === size ? 'selected' : ''}`}
                    onClick={() => handleSizeClick(size)}
                  >
                    {size}
                  </span>
                ))}
              </div>
            </div>

            <div className="product-colors">
              <p>Màu sắc</p>
              {colorImages.map((colorImage, index) => (
                <img
                  key={index}
                  src={colorImage}
                  alt={`Color ${index + 1}`}
                  className={`modal-color-image ${selectedColorIndex === index ? 'selected' : ''}`}
                  onClick={() => handleColorClick(index)}
                />
              ))}
            </div>

            <div className="product-actions">
              <div className="quantity-wrapper">
                <button className="quantity-btn" onClick={handleDecrease}>-</button>
                <span className="quantity-display">
                  {productQuantity < 10 ? `0${productQuantity}` : productQuantity}
                </span>
                <button className="quantity-btn" onClick={handleIncrease}>+</button>
              </div>

              <button className="add-to-cart-btn">
                <div className="cart-icon-wrapper">
                  <img 
                    src="https://gumac.vn/static/media/ic_add_cart_circle_blue.17d5806aa31b1b36ac5f.svg" 
                    alt="Thêm vào giỏ" 
                    className="add-to-cart-icon-modal" 
                  />
                </div>
                Thêm vào giỏ
              </button>

              <button className="favorite-btn" onClick={toggleFavorite}>
                <img 
                  src={isFavorite 
                    ? "https://gumac.vn/static/media/ic_love_red.22229d5f7f45d6901b47.svg"  
                    : "https://gumac.vn/static/media/ic_love_white.c598357d1fc15bfdc8a6.svg"
                    }
                  alt="Favorite" 
                  className={`favorite-icon ${isFavorite ? 'favorite-active' : ''}`}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;