import React from 'react';
import './Footer.css'; // Import the CSS file

const Footer = () => {
  return (
    <div style={{ backgroundColor: '#e0f7f7' }}>
      <div className="footer"> 
        <div className="footer-section">
          <img src="https://js0fpsb45jobj.vcdn.cloud/storage/upload/media/icon/download.png" alt="Logo" style={{ width: '80px' }} />
          <p>
            GUMAC tự hào là hàng thời trang thiết kế ứng dụng với sứ mệnh truyền
            cảm hứng về lối sống hạnh phúc và kiến tạo phong cách thời trang cho
            phụ nữ Việt.
          </p>
          <div className="social-icons">
            <img src="https://js0fpsb45jobj.vcdn.cloud/storage/upload/media/icon/facebook.svg" alt="Facebook" />
            <img src="https://js0fpsb45jobj.vcdn.cloud/storage/upload/media/icon/zalo.svg" alt="Zalo" />
            <img src="https://js0fpsb45jobj.vcdn.cloud/storage/upload/media/icon/youtube.svg" alt="YouTube" />
            <img src="https://js0fpsb45jobj.vcdn.cloud/storage/upload/media/icon-mxh-tt.png" alt="TikTok" />
            <img src="https://js0fpsb45jobj.vcdn.cloud/storage/upload/media/icon-mxh-ins.png" alt="Instagram" />
          </div>
        </div>

        <div className="footer-section">
          <h4>VỀ GUMAC</h4>
          <ul>
            <li>Giới thiệu</li>
            <li>Trang Chủ</li>
            <li>Bộ sưu tập</li>
            <li>Tuyển dụng</li>
            <li>Tin tức</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>NÀNG HỎI - GU ĐÁP</h4>
          <ul>
            <li>Váy Đầm</li>
            <li>Áo Sơ Mi</li>
            <li>Quần Tây</li>
            <li>Áo Thun</li>
            <li>Chân Váy</li>
            <li>Quần Short</li>
            <li>Áo Dài</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>NÀNG HỎI - GU ĐÁP</h4>
          <ul>
            <li>Hướng dẫn đặt hàng tại Gumac.vn</li>
            <li>Hướng dẫn chọn size váy - đầm cùng Gumac.vn</li>
            <li>Chính sách khách hàng thân thiết</li>
            <li>Chính sách bảo mật thông tin khách hàng</li>
            <li>Chính sách bảo hành và đổi sản phẩm</li>
            <li>Quy định về thanh toán và vận chuyển</li>
            <li>Liên hệ</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>CÁCH THỨC THANH TOÁN</h4>
          <div className="payment-icons">
            <img src="https://js0fpsb45jobj.vcdn.cloud/storage/upload/media/icon-payment/money.svg" alt="Payment 1" />
            <img src="https://js0fpsb45jobj.vcdn.cloud/storage/upload/media/icon-payment/banking.svg" alt="Payment 2" />
            <img src="https://js0fpsb45jobj.vcdn.cloud/storage/upload/media/icon-payment/momo.svg" alt="Payment 3" />
            <img src="https://js0fpsb45jobj.vcdn.cloud/storage/upload/media/icon-payment/vnpay.svg" alt="Payment 4" />
          </div>
        </div>
      </div>

      <div className="copyright">
        ©2021. Công ty cổ phần GUMAC. ALL RIGHTS RESERVED
      </div>

      <div className="certification">
        <img src="https://js0fpsb45jobj.vcdn.cloud/storage/upload/media/gov.svg" alt="Certification" />
      </div>
    </div>
  );
};

export default Footer;
