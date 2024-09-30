import React from 'react';
import './ImageWithText.css'; // Đường dẫn tới file CSS

const ImageWithText = () => {
    return (
        <div className="image-row-container">
            {/* Hình ảnh và chữ 1 */}
            <div className="image-with-text-container">
                <img 
                    src="https://js0fpsb45jobj.vcdn.cloud/storage/upload/media/1-3.png" 
                    alt="Freeship Banner" 
                    className="freeship-image"
                />
                <p className="freeship-text">FREESHIP</p>
                <p className="withText-text">Miễn Phí Vận Chuyển Cho Đơn Hàng Từ 500K</p>
            </div>

            {/* Hình ảnh và chữ 2 */}
            <div className="image-with-text-container">
                <img 
                    src="https://js0fpsb45jobj.vcdn.cloud/storage/upload/media/2-3.png" 
                    alt="Freeship Banner" 
                    className="freeship-image"
                />
                <p className="freeship-text">ĐỔI HÀNG TRONG VÒNG 15 NGÀY</p>
                <p className="withText-text">Hỗ Trợ Đổi Hàng Trong 15 Ngày</p>
            </div>

            {/* Hình ảnh và chữ 3 */}
            <div className="image-with-text-container">
                <img 
                    src="https://js0fpsb45jobj.vcdn.cloud/storage/upload/media/3-5.png" 
                    alt="Freeship Banner" 
                    className="freeship-image"
                />
                <p className="freeship-text">CHÍNH SÁCH TÍCH ĐIỂM</p>
                <p className="withText-text">Áp Dụng Tích Điểm Cho Tất Cả Đơn Hàng</p>
            </div>

            {/* Hình ảnh và chữ 4 */}
            <div className="image-with-text-container">
                <img 
                    src="https://js0fpsb45jobj.vcdn.cloud/storage/upload/media/4-2.png" 
                    alt="Freeship Banner" 
                    className="freeship-image"
                />
                <p className="freeship-text">TƯ VẤN LỰA CHỌN VÀ MẶC ĐỒ</p>
                <p className="withText-text">Đội Ngũ Tư Vấn Tận Tình</p>
            </div>
        </div>
    );
};

export default ImageWithText;
