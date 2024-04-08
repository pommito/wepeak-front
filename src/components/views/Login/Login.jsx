import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

import { FiEye, FiEyeOff, FiArrowUpRight } from 'react-icons/fi';

import './Login.scss';

import logo from '../../../assets/favicon.png';

const Login = () => {
  const [isVisibile, setIsVisible] = useState(false);

  return (
    <main className="Login">
      <div className="Login-content">
        <NavLink to="/">
          <img src={logo} alt="Logo WePeak" className="Login-content-logo" />
        </NavLink>
        <h1 className="Login-content-title">Connexion</h1>
        <p className="Login-content-register">
          Vous n&apos;avez pas de compte ?{' '}
          <NavLink to="/register" className="Login-content-register-link">
            S&apos;inscrire
          </NavLink>
        </p>
        <form className="Login-content-form">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
          <div className="Login-content-form-wrapper">
            <label htmlFor="password">Mot de passe</label>
            <Link
              to="/forgot-password"
              className="Login-content-form-wrapper-link"
            >
              Mot de passe oublié ?
            </Link>
          </div>
          <div className="Login-content-form-password">
            <input
              type={isVisibile ? 'text' : 'password'}
              id="password"
              name="password"
              className="Login-content-form-password-input"
              required
            />
            <i className="Login-content-form-password-icon">
              {isVisibile ? (
                <FiEye onClick={() => setIsVisible(!isVisibile)} />
              ) : (
                <FiEyeOff onClick={() => setIsVisible(!isVisibile)} />
              )}
            </i>
          </div>
          <button type="submit">Se connecter</button>
        </form>
      </div>
      <NavLink to="/" className="Login-content-exit">
        Retour à l&apos;accueil
        <FiArrowUpRight />
      </NavLink>
    </main>
  );
};

export default Login;
