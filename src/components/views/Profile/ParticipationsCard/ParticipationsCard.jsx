import { IoIosMore } from 'react-icons/io';
import PropTypes from 'prop-types';

import './ParticipationsCard.scss';

const ParticipationsCard = ({ title, number }) => {
  return (
    <div className="ParticipationsCard">
      <h4 className="ParticipationsCard-title">
        {title} ({number})
      </h4>
      <div className="ParticipationsCard-list">
        <div className="ParticipationsCard-list-item">
          <div className="ParticipationsCard-list-item-imgContainer">
            <img
              src="https://www.guide-des-landes.com/_bibli/articlesPage/108/images/spots-de-surf-dans-les-landes.jpg?v=ficheArticle&width=772&height=540&pixelRatio=1.0000"
              alt=""
            />
          </div>
          <div className="ParticipationsCard-list-item-content">
            <p className="ParticipationsCard-list-item-content-name">
              Session surf aux Bourdaines
            </p>
            <p className="ParticipationsCard-list-item-content-sport">Surf</p>
            <p className="ParticipationsCard-list-item-content-locationAndDate">
              Seignosse, 4 mai 2024
            </p>
          </div>
        </div>

        <div className="ParticipationsCard-list-item">
          <div className="ParticipationsCard-list-item-imgContainer">
            <img
              src="https://res.cloudinary.com/easymountain/image/upload/v1690203967/do-web/prod/randonnee_rhune_cd9c2a1388.jpg"
              alt=""
            />
          </div>
          <div className="ParticipationsCard-list-item-content">
            <p className="ParticipationsCard-list-item-content-name">
              La Rhune depuis Ascain
            </p>
            <p className="ParticipationsCard-list-item-content-sport">
              Randonnée
            </p>
            <p className="ParticipationsCard-list-item-content-locationAndDate">
              Ascain, 26 mai 2024
            </p>
          </div>
        </div>
        <div className="ParticipationsCard-list-item">
          <div className="ParticipationsCard-list-item-imgContainer">
            <img
              src="https://www.guide-des-landes.com/_bibli/articlesPage/108/images/spots-de-surf-dans-les-landes.jpg?v=ficheArticle&width=772&height=540&pixelRatio=1.0000"
              alt=""
            />
          </div>
          <div className="ParticipationsCard-list-item-content">
            <p className="ParticipationsCard-list-item-content-name">
              Session surf aux Bourdaines
            </p>
            <p className="ParticipationsCard-list-item-content-sport">Surf</p>
            <p className="ParticipationsCard-list-item-content-locationAndDate">
              Seignosse, 4 mai 2024
            </p>
          </div>
        </div>
      </div>
      {number > 3 && (
        <button type="button" className="ParticipationsCard-more">
          <IoIosMore />
        </button>
      )}
    </div>
  );
};

ParticipationsCard.propTypes = {
  title: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ParticipationsCard;
