import React from 'react';
import './ProductCard.css'; // Đường dẫn tới file CSS

const ProductList = () => {
    return (
        <div className="product-container">
            <div className="product-card">
                <img 
                    src="https://js0fpsb45jobj.vcdn.cloud/storage/upload/media/nam-moi-2024/31/thun-1.jpg" 
                    alt="Product 1" 
                    className="product-image"
                />                
            </div>
            
            <div className="product-card">
                <img 
                    src="https://js0fpsb45jobj.vcdn.cloud/storage/upload/media/nam-moi-2024/31/m-hieu.jpg" 
                    alt="Product 2" 
                    className="product-image"
                />
            </div>

            <div className="product-card">
                <img 
                    src="https://js0fpsb45jobj.vcdn.cloud/storage/upload/media/nam-moi-2024/31/so-mi-chan-vay.jpg" 
                    alt="Product 3" 
                    className="product-image"
                />
            </div>

            <div className="product-card">
                <img 
                    src="https://js0fpsb45jobj.vcdn.cloud/storage/upload/media/nam-moi-2024/31/bst-concept.jpg" 
                    alt="Product 4" 
                    className="product-image"
                />
            </div>
        </div>
    );
};

export default ProductList;
