import React, { useState } from 'react';
import Navbar from './Components/Nav/Navbar';
import Product from './Components/Product';
import Collections from './Components/Pages/Collections';
import Men from './Components/Pages/Men';
import Women from './Components/Pages/Women';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import data from './data.json';
import './css/styles.css';

function App() {
  const [count, setCount] = useState(0);
  const [product] = useState(data[0]);
  const [image] = useState(product.assets.images);
  const [thumbnails] = useState(product.assets.thumbnails);
  const length = image.length;
  const [idx, setIdx] = useState(0);
  const [isActive, setActive] = useState(false);

  const inc = () => {
    setCount(count + 1);
  };

  const dec = () => {
    if (count <= 0) {
      return;
    } else {
      setCount(count - 1);
    }
  };

  const deleteAllItems = () => {
    setCount(0);
  };

  const nextSlide = () => {
    setIdx(idx === length - 1 ? 0 : idx + 1);
  };

  const prevSlide = () => {
    setIdx(idx === 0 ? length - 1 : idx - 1);
  };

  const openCart = () => {
    setActive(true);
  };

  const closeCart = () => {
    setActive(false);
  };

  return (
    <Router>
      <div className="App">
        <Navbar count={count} openCart={openCart} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Product
                count={count}
                dec={dec}
                inc={inc}
                deleteAllItems={deleteAllItems}
                product={product}
                image={image}
                idx={idx}
                setIdx={setIdx}
                thumbnails={thumbnails}
                nextSlide={nextSlide}
                prevSlide={prevSlide}
                openCart={openCart}
                closeCart={closeCart}
                isActive={isActive}
              />
            }
          />
          <Route path="/collections" element={<Collections />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
