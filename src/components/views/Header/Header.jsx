import { CiSearch } from 'react-icons/ci';
import { NavLink } from 'react-router-dom';

import './Header.scss';

const Header = () => {
  return (
    <header className="Header">
      <img src="/src/assets/Logo_BW.svg" alt="Logo de WePeak" />
      <form action="">
        <input type="text" />
        <button type="submit">
          <CiSearch />
        </button>
      </form>
      <NavLink to="/login">Se connecter</NavLink>
      <NavLink to="/register">S&apos;inscrire</NavLink>
    </header>
  );
};

export default Header;
