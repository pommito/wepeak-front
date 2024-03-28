import { Link } from 'react-router-dom';

import './Footer.scss';

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="Footer-main">
        <div className="Footer-main-socials">
          <p className="Footer-main-socials-message">
            Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam
            mauris sed ma
          </p>
          <ul className="Footer-main-socials-logos">
            <li>Facebook</li>
            <li>X</li>
            <li>Instagram</li>
            <li>TikTok</li>
            <li>Linkedin</li>
          </ul>
        </div>

        <div className="Footer-main-account">
          <ul className="Footer-main-account-list">
            <li>
              <h4>Account</h4>
            </li>
            <li>
              <Link to="/register">Inscription</Link>
            </li>
            <li>
              <Link to="/login">Connexion</Link>
            </li>
            <li>
              {/* todo: conditionner la redirection sur connexion si pas loggé */}
              <Link to="/profile">Profil</Link>
            </li>
          </ul>
        </div>

        <div className="Footer-main-wepeak">
          <ul className="Footer-main-wepeak-list">
            <li>
              <Link to="/">
                <h4>WePeak</h4>
              </Link>
            </li>
            <li>
              <Link to="/privacy">Privacy</Link>
            </li>
            <li>
              <Link to="/legal-mention">Connexion</Link>
            </li>
            <li>
              <Link to="/about">&#xC0; propos</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="Footer-bottom">
        <p className="Footer-bottom-text">
          Copyright &#xA9; 2024 WePeak &#124; Tout droit réservé
        </p>
      </div>
    </footer>
  );
};

export default Footer;
