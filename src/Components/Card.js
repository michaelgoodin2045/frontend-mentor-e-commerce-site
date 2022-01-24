import React from 'react';
import Thumbnails from './Thumbnails';
import MediaQuery from 'react-responsive';

const Card = ({ image, setIdx, idx, openLightbox }) => {
  return (
    <div className="card">
      <div className="large">
        {image.map((el, index) => {
          return (
            <img
              src={el}
              key={index}
              alt="product"
              className={idx === index ? '' : 'none'}
              onClick={openLightbox}
            />
          );
        })}
      </div>
      <MediaQuery minWidth={740}>
        <Thumbnails idx={idx} setIdx={setIdx} image={image} />
      </MediaQuery>
    </div>
  );
};

export default Card;
