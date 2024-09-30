import React from 'react';
import './ImageVoucher.css'; // Đường dẫn tới file CSS

const ImageVoucher = () => {
    return (
        <div className="voucher-container">
            <div className="image-container">
                <img 
                    src="https://gumac.vn/static/media/layer.a5197a75187403484ba2.png" 
                    alt="Gumac layer" 
                    className="image"
                />
                <div className="text-overlay">
                    <h1>Voucher 20K</h1>
                    <p>Giảm 20K cho đơn từ 350K</p>
                    <button className="claim-button">Claim Now</button>
                </div>
            </div>
            <div className="image-container">
                <img 
                    src="https://gumac.vn/static/media/layer.a5197a75187403484ba2.png" 
                    alt="Gumac layer" 
                    className="image"
                />
                <div className="text-overlay">
                    <h1>Voucher 50K</h1>
                    <p>Giảm 50K cho đơn từ 500K</p>
                    <button className="claim-button">Claim Now</button>
                </div>
            </div>
        </div>
    );
};

export default ImageVoucher;
