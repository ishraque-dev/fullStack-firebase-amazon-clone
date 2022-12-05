import React from 'react';
import CurrencyFormat from 'react-currency-format';
import '../style/checkout.css';
const CheckOut = () => {
  return (
    <div className="checkout">
      <img
        src="https://www.webinterpret.com/wp-content/uploads/2020/03/amazon-global-ecommerce-cart.png"
        className="checkout__ad"
        alt=""
      />
      <div className="box__container">
        <div className="checkout__left">
          <div className="checkout__title">
            <h2> Your shopping Basket</h2>
          </div>
        </div>
        <div className="checkout__right">
          <div className="subtotal">
            <CurrencyFormat
              value={2456981}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'$'}
              renderText={(value) => (
                <>
                  <p>
                    Subtotal (0 items):
                    <strong>0</strong>
                  </p>
                  <small className="subtotal__gift">
                    <input style={{ marginRight: '10px' }} type="checkbox" />
                    This order contains a gift.
                  </small>
                  <button>Produce order</button>
                </>
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
