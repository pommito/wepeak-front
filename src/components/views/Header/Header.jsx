// React-icons imports
import { useSelector, useDispatch } from 'react-redux';

import { IconContext } from 'react-icons';
import { FiSearch } from 'react-icons/fi';
import { FaRegMessage } from 'react-icons/fa6';

import { NavLink, Link } from 'react-router-dom';

import './Header.scss';

const Header = () => {
  const input = useSelector((state) => state.inputMessage);
  const dispatch = useDispatch();

  const isLogged = true;

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
        <input
          type="text"
          placeholder="Ville ou code postal"
          value={input}
          onChange={(e) => {
            const action = changeInputSearch(e.target.value);
            dispatch(action);
          }}
        />
        <button type="submit">
          <IconContext.Provider value={{ size: '1.25rem' }}>
            <FiSearch className="search-logo" />
          </IconContext.Provider>
        </button>
      </form>
      <nav className="Header-nav">
        {!isLogged && (
          <ul className="Header-nav-links">
            <li className="Header-nav-link connect">
              <NavLink to="/login">Se connecter</NavLink>
            </li>
            <li className="Header-nav-link register">
              <NavLink to="/register">S&apos;inscrire</NavLink>
            </li>
          </ul>
        )}
        {isLogged && (
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
