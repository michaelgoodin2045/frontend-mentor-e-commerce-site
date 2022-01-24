import React from 'react';

const Arrows = ({ prevSlide, nextSlide }) => {
  return (
    <>
      <div className="arrow left" onClick={prevSlide}>
        <div className="prev">
          <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11 1 3 9l8 8"
              stroke="#1D2026"
              strokeWidth="3"
              fill="none"
              fillRule="evenodd"
            />
          </svg>
        </div>
      </div>
      <div className="arrow right" onClick={nextSlide}>
        <div className="next">
          <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m2 1 8 8-8 8"
              stroke="#1D2026"
              strokeWidth="3"
              fill="none"
              fillRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default Arrows;
