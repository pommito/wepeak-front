import React, { useState, useEffect } from 'react';

// React-icons imports
import { LuSearch, LuSearchX } from 'react-icons/lu';
import { FaRegMessage } from 'react-icons/fa6';

import { NavLink, Link } from 'react-router-dom';

import './Header.scss';

const Header = () => {
  const isLogged = false; // To remove at API plug

  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const onScroll = () => {
    // If vertical scroll is greater than 0, we set isScrolled to true
    const scrolled = window.scrollY > 0;
    setIsScrolled(scrolled);
  };

  // At each scroll, we call the onScroll function
  window.addEventListener('scroll', onScroll);

  // Manange display of search bar in tablet and mobile version
  const handleSearchButtonClick = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      // Change isSearchOpen state to true if window width is greater than 992px
      setIsSearchOpen(window.innerWidth > 992 ? true : isSearchOpen);
    };

    // Call handleResize() at the first render
    handleResize();

    // Event listener on window resize
    window.addEventListener('resize', handleResize);

    // Clean event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return (
    <header className={`Header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="Header-left">
        <Link to="/">
          <div className="Header-left-logo-container">
            <img
              className="Header-left-logo"
              src="/src/assets/Logo_BW.svg"
              alt="Logo de WePeak"
            />
          </div>
        </Link>

        {!isSearchOpen && (
          <button
            type="button"
            className="Header-left-openSearch open"
            onClick={handleSearchButtonClick}
          >
            <LuSearch className="Header-left-openSearch-icon" />
          </button>
        )}
        {isSearchOpen && (
          <button
            type="button"
            className="Header-left-openSearch close"
            onClick={handleSearchButtonClick}
          >
            <LuSearchX className="Header-left-openSearch-icon" />
          </button>
        )}
      </div>

      {isSearchOpen && (
        <form className="Header-form">
          <input type="text" placeholder="Ville ou code postal" />
          <button type="submit">
            <LuSearch className="search-logo" />
          </button>
        </form>
      )}

      <nav className="Header-nav">
        {!isLogged && (
          <ul className="Header-nav-links">
            <li className="Header-nav-link">
              <NavLink className="connect" to="/login">
                Se connecter
              </NavLink>
            </li>
            <li className="Header-nav-link">
              <NavLink className="register" to="/register">
                S&apos;inscrire
              </NavLink>
            </li>
          </ul>
        )}
        {isLogged && (
          <ul className="Header-nav-links">
            <li className="Header-nav-link messages">
              <NavLink to="/messages">
                <FaRegMessage className="messages-icon" />
              </NavLink>
            </li>
            <li className="Header-nav-link profile">
              <NavLink to="/profile">
                <div className="profile-picture-container">
                  <img
                    src="https://ca.slack-edge.com/T060RPZMDH6-U061SDTH4TF-c278721b6e6d-512"
                    alt=""
                  />
                </div>
              </NavLink>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
