import React from 'react';
import cart from '../assets/icon-cart.svg';

const AddCart = ({ openCart }) => {
  return (
    <>
      <button className="add-cart-btn" onClick={openCart}>
        <div className="cart-icon">
          <img src={cart} alt="shopping cart" />
        </div>
        <div className="btn-title">
          <h2>Add to cart</h2>
        </div>
      </button>
    </>
  );
};

export default AddCart;
