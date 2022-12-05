import { React, useContext } from 'react';
import '../style/product.css';
import Context from '../store/Context';
const Product = ({ title, image, price, id }) => {
  const { addToCart } = useContext(Context);
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <div className="product__price">
          <small>$</small>
          <strong>{price}</strong>
          <div className="product__rating">
            {Array(4)
              .fill()
              .map((_, i) => (
                <p>⭐</p>
              ))}
          </div>
        </div>
      </div>
      <img src={image} alt="" />
      <button
        type="button"
        onClick={() => {
          addToCart({ title, image, price, id });
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
