import React from 'react';

const Thumbnails = ({ image, setIdx, idx }) => {
  return (
    <div className="thumbnails">
      {image.map((el, index) => {
        return (
          <div
            key={index}
            className={
              idx === index ? 'thumbnail-item overlay' : 'thumbnail-item'
            }
            onClick={() => setIdx(index)}
          >
            <img
              src={el}
              alt="product thumbnail"
              className={idx === index ? 'thumbnail--active' : 'thumbnail'}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Thumbnails;
