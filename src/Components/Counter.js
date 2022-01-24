import React from 'react';
import minus from '../assets/icon-minus.svg';
import plus from '../assets/icon-plus.svg';

const Counter = ({ count, dec, inc }) => {
  return (
    <>
      <button className="minus sign" onClick={dec}>
        <img src={minus} alt="minus sign" />
      </button>
      <div className="value">
        <h2>{count}</h2>
      </div>
      <button className="plus sign" onClick={inc}>
        <img src={plus} alt="plus sign" />
      </button>
    </>
  );
};

export default Counter;
