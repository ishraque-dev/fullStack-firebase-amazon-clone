import React from 'react';
import '../style/product.css';
const Product = () => {
  return (
    <div className="product">
      <div className="product__info">
        <p>The lean Startup</p>
        <p className="product__price">
          <small>$</small>
          <strong>23.44</strong>
          <div className="product__rating">
            <p>⭐⭐⭐</p>
          </div>
        </p>
      </div>
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
        alt=""
      />
    </div>
  );
};

export default Product;
