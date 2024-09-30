import React from 'react';
import './CollectionFirst.css';

const ProductCard = ({ image, title, code, description, price }) => (
  <div className="product-card-first">
    <img src={image} alt={title} className="product-image-first" />
    <div className="product-details-first">
      <h3>{title}</h3>
      <p>{code}</p>
      <p>{description}</p>
      <p className="price">{price} đ</p>
      <button className="buy-now">Mua ngay</button>
    </div>
  </div>
);

const CollectionBanner = ({ image }) => (
  <div className="collection-banner-first">
    <img src={image} alt="Collection" className="banner-image-first" />
    <div className="banner-text-first">
      <h2>ELEGANT STYLE</h2>
      <p>XEM NGAY BỘ SƯU TẬP</p>
    </div>
  </div>
);

const ProductDisplay = () => (
  <div className="product-display-first">
    <div className="product-list-first">
      <ProductCard
        image="image-url-1"
        title="Quần suông chiết ly"
        code="QEO9037"
        description="Quần Tây Ống Suông"
        price="530.000"
      />
      <ProductCard
        image="image-url-2"
        title="Đầm xoắn ngực tay phồng"
        code="DEO9033"
        description="Váy Đầm Công Sở"
        price="520.000"
      />
    </div>
    <CollectionBanner image="banner-image-url" />
  </div>
);

export default ProductDisplay;