import React, { useState } from 'react';
import MediaQuery from 'react-responsive/';
import Deck from './Deck';
import Counter from './Counter';
import AddCart from './AddCart';
import Cart from './Cart';
import Lightbox from './Lightbox';

const Product = ({
  count,
  inc,
  dec,
  deleteAllItems,
  product,
  image,
  idx,
  setIdx,
  thumbnails,
  nextSlide,
  prevSlide,
  nextImage,
  openCart,
  closeCart,
  isActive,
}) => {
  const price = (product.price * 0.01).toFixed(2);
  const discount = product.disc;
  const percentOff = discount / 100;
  const salePrice = (price * percentOff).toFixed(2);

  const [lightboxOpen, setLightboxOpen] = useState(false);

  const openLightbox = () => {
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  return (
    <>
      <div className="product">
        <Deck
          image={image}
          idx={idx}
          setIdx={setIdx}
          nextSlide={nextSlide}
          prevSlide={prevSlide}
          openLightbox={openLightbox}
        />
        <div className="product-container">
          <div className="company">
            <h3>Sneaker Company</h3>
          </div>
          <div className="prod-name">
            <h1>{product.name}</h1>
          </div>
          <div className="prod-desc">
            <p>{product.desc}</p>
          </div>
          <div className="price-box">
            <div className="sale-price">
              <h1>${salePrice}</h1>
            </div>
            <div className="discount">
              <h2>{discount}%</h2>
            </div>
            <div className="full-price">
              <h2>${price}</h2>
            </div>
          </div>
          <div className="button-box">
            <div className="counter">
              <Counter count={count} dec={dec} inc={inc} />
            </div>
            <div className="add-cart">
              <AddCart openCart={openCart} />
            </div>
          </div>
        </div>
        <Cart
          count={count}
          thumbnails={thumbnails}
          idx={idx}
          product={product.name}
          salePrice={salePrice}
          closeCart={closeCart}
          isActive={isActive}
          deleteAllItems={deleteAllItems}
        />
        <MediaQuery minWidth={740}>
          <Lightbox
            image={image}
            idx={idx}
            setIdx={setIdx}
            nextSlide={nextSlide}
            prevSlide={prevSlide}
            nextImage={nextImage}
            lightboxOpen={lightboxOpen}
            closeLightbox={closeLightbox}
          />
        </MediaQuery>
      </div>
    </>
  );
};

export default Product;
