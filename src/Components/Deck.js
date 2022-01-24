import React from 'react';
import MediaQuery from 'react-responsive';
import Card from './Card';
import Arrows from './Arrows';

const Deck = ({ image, idx, setIdx, nextSlide, prevSlide, openLightbox }) => {
  return (
    <div className="deck">
      <div className="viewport">
        <div className="image-container">
          <Card
            image={image}
            idx={idx}
            setIdx={setIdx}
            openLightbox={openLightbox}
          />
        </div>
        <MediaQuery maxWidth={739}>
          <Arrows prevSlide={prevSlide} nextSlide={nextSlide} />
        </MediaQuery>
      </div>
    </div>
  );
};

export default Deck;
