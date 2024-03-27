import { IconContext } from 'react-icons';
import { FiSearch } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

import './Header.scss';

const Header = () => {
  return (
    <header className="Header">
      <div className="Header-left">
        <img
          className="Header-left-logo"
          src="/src/assets/Logo_BW.svg"
          alt="Logo de WePeak"
        />
        <form className="Header-left-form">
          <input type="text" placeholder="Commune de la sortie" />
          <button type="submit">
            <IconContext.Provider value={{ size: '1.2rem' }}>
              <FiSearch className="search-logo" />
            </IconContext.Provider>
          </button>
        </form>
      </div>
      <nav className="Header-nav">
        <ul className="Header-nav-links">
          <li className="Header-nav-link Header-nav-link-connect">
            <NavLink to="/login">Se connecter</NavLink>
          </li>
          <li className="Header-nav-link Header-nav-link-register">
            <NavLink to="/register">S&apos;inscrire</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
