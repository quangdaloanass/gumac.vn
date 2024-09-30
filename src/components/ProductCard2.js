import React from 'react';
import './ProductCard.css'; // Đường dẫn tới file CSS

const ProductList2 = () => {
    return (
        <div className="product-container">
            <div className="product-card">
                <img 
                    src="https://js0fpsb45jobj.vcdn.cloud/storage/upload/media/nam-moi-2024/31/voan.jpg" 
                    alt="Product 5" 
                    className="product-image"
                />                
            </div>
            
            <div className="product-card">
                <img 
                    src="https://js0fpsb45jobj.vcdn.cloud/storage/upload/media/nam-moi-2024/31/lua-satin.jpg" 
                    alt="Product 6" 
                    className="product-image"
                />
            </div>

            <div className="product-card">
                <img 
                    src="https://js0fpsb45jobj.vcdn.cloud/storage/upload/media/nam-moi-2024/31/cotton.jpg" 
                    alt="Product 7" 
                    className="product-image"
                />
            </div>

            <div className="product-card">
                <img 
                    src="https://js0fpsb45jobj.vcdn.cloud/storage/upload/media/nam-moi-2024/31/lua-ngoc-trai.jpg" 
                    alt="Product 8" 
                    className="product-image"
                />
            </div>
        </div>
    );
};

export default ProductList2;
