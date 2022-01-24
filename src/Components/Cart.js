import React, { useState, useEffect } from 'react';
import trash from '../assets/icon-delete.svg';

const Cart = ({
  count,
  thumbnails,
  idx,
  product,
  salePrice,
  isActive,
  closeCart,
  deleteAllItems,
}) => {
  const [cartItem, setCartItem] = useState(count);
  const [classNone, setClassNone] = useState('');
  const [classItem, setClassItem] = useState('');
  const totalPrice = (salePrice * count).toFixed(2);

  useEffect(() => {
    if (count === 0) {
      setCartItem('Your cart is empty');
    } else {
      setCartItem('happy');
    }
  }, [count]);

  useEffect(() => {
    if (count === 0) {
      setClassNone('active');
    } else {
      setClassNone('');
    }
  }, [count]);

  useEffect(() => {
    if (count === 0) {
      setClassItem('');
    } else {
      setClassItem('active');
    }
  }, [count]);

  return (
    <div className={isActive ? 'cart-container open' : 'cart-container'}>
      <div className="cart-top" onClick={closeCart}>
        <h2>Cart</h2>
      </div>
      <div className="cart-bottom">
        <div className={`zero-items ${classNone}`}>
          <h2>{cartItem}</h2>
        </div>
        <div className={`cart-items ${classItem}`}>
          <div className="cart-items-container">
            {thumbnails.map((el, index) => {
              return (
                <img
                  src={el}
                  key={index}
                  alt="product thumbnail"
                  className={idx === index ? '' : 'none'}
                />
              );
            })}

            <div className="product-box">
              <div className="cart-product">
                <h4>{product}</h4>
              </div>
              <div className="total">
                <h4>
                  ${salePrice} x {count}
                  <span>${totalPrice}</span>
                </h4>
              </div>
            </div>
            <div className="trash-can" onClick={deleteAllItems}>
              <img src={trash} alt="delete icon" />
            </div>
          </div>
          <div className="cart-btn">
            <button className="cart-items-btn">
              <h2>Checkout</h2>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
