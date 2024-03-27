import { CiSearch } from 'react-icons/ci';
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
        <form action="">
          <input type="text" />
          <button type="submit">
            <CiSearch />
          </button>
        </form>
      </div>
      <nav className="Header-nav">
        <ul className="Header-nav-links">
          <li className="Header-nav-link">
            <NavLink to="/login">Se connecter</NavLink>
          </li>
          <li className="Header-nav-link">
            <NavLink to="/register">S&apos;inscrire</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
