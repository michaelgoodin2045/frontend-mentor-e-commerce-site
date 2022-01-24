import React, { useState, useEffect } from 'react';
import MediaQuery from 'react-responsive';
import logo from '../../assets/logo.svg';
import cart from '../../assets/icon-cart-gray.svg';
import avi from '../../assets/image-avatar.png';
import Hamburger from './Hamburger';
import { Link, NavLink } from 'react-router-dom';

const Navbar = ({ count, openCart }) => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [oval, setOval] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setHamburgerOpen(false);
  };

  useEffect(() => {
    if (count > 0) {
      setOval(true);
    } else {
      setOval(false);
    }
  }, [count]);

  return (
    <div className="navbar">
      <MediaQuery maxWidth={739}>
        <div
          className={`hamburger ${hamburgerOpen ? ' hamburger-open' : ''}`}
          onClick={toggleHamburger}
        >
          <Hamburger />
        </div>
      </MediaQuery>

      <div className="logo">
        <Link to="/">
          <img src={logo} alt="sneakers logo" />
        </Link>
      </div>
      <div
        className={`transparent ${hamburgerOpen ? ' show-transparent' : ''}`}
      ></div>
      <div className={`nav-links ${hamburgerOpen ? ' show-menu' : ''}`}>
        <MediaQuery maxWidth={739}>
          <div className="close" onClick={() => closeMenu()}>
            <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                fill="#69707D"
                fillRule="evenodd"
              />
            </svg>
          </div>
        </MediaQuery>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'nav-link--active' : 'nav-link'
          }
          to="/collections"
        >
          <button className="nav-btn" onClick={() => closeMenu()}>
            Collections
          </button>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'nav-link--active' : 'nav-link'
          }
          to="/men"
        >
          <button className="nav-btn" onClick={() => closeMenu()}>
            Men
          </button>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'nav-link--active' : 'nav-link'
          }
          to="/women"
        >
          <button className="nav-btn" onClick={() => closeMenu()}>
            Women
          </button>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'nav-link--active' : 'nav-link'
          }
          to="/about"
        >
          <button className="nav-btn" onClick={() => closeMenu()}>
            About
          </button>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'nav-link--active' : 'nav-link'
          }
          to="/contact"
        >
          <button className="nav-btn" onClick={() => closeMenu()}>
            Contact
          </button>
        </NavLink>
      </div>
      <div className="shopping-cart-items">
        <div className="shopping-cart-icon" onClick={openCart}>
          <img src={cart} alt="" />
        </div>

        <div className={`cart-count-oval ${oval ? ' open-oval' : ''}`}>
          {count}
        </div>
      </div>
      <div className="avatar">
        <img src={avi} alt="avatar" />
      </div>
    </div>
  );
};

export default Navbar;
