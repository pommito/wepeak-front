import { IconContext } from 'react-icons';
import { FiSearch } from 'react-icons/fi';
import { FaRegMessage } from 'react-icons/fa6';
import { PiUserCircle } from 'react-icons/pi';

import { NavLink, Link } from 'react-router-dom';

import './Header.scss';

const Header = () => {
  const isLogged = false;

  return (
    <header className="Header">
      <Link to="/">
        <div className="Header-logo-container">
          <img
            className="Header-logo"
            src="/src/assets/Logo_BW.svg"
            alt="Logo de WePeak"
          />
        </div>
      </Link>
      <form className="Header-form">
        <input type="text" placeholder="Ville ou code postal" />
        <button type="submit">
          <IconContext.Provider value={{ size: '1.2rem' }}>
            <FiSearch className="search-logo" />
          </IconContext.Provider>
        </button>
      </form>
      <nav className="Header-nav">
        {isLogged && (
          <ul className="Header-nav-links">
            <li className="Header-nav-link connect">
              <NavLink to="/login">Se connecter</NavLink>
            </li>
            <li className="Header-nav-link register">
              <NavLink to="/register">S&apos;inscrire</NavLink>
            </li>
          </ul>
        )}
        {!isLogged && (
          <ul className="Header-nav-links">
            <li className="Header-nav-link messages">
              <NavLink to="/messages">
                <IconContext.Provider value={{ size: '1.5rem' }}>
                  <FaRegMessage />
                </IconContext.Provider>
              </NavLink>
            </li>
            <li className="Header-nav-link profile">
              <NavLink to="/profile">
                <IconContext.Provider value={{ size: '3.5rem' }}>
                  <PiUserCircle />
                </IconContext.Provider>
              </NavLink>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
