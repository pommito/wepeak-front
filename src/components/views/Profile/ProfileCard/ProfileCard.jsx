// Import necessary libraries
import PropTypes from 'prop-types';
import { HiLocationMarker } from 'react-icons/hi';
import { FaCalendarMinus } from 'react-icons/fa6';

// Import stylesheet
import './ProfileCard.scss';

const ProfileCard = ({
  firstname,
  lastname,
  email,
  city,
  memberSince,
  thumbnail,
}) => {
  return (
    <div className="ProfileCard">
      <div className="ProfileCard-imgContainer">
        <img className="ProfileCard-imgContainer-img" src={thumbnail} alt="" />
        <div className="ProfileCard-imgContainer-userData">
          <h3>
            {firstname} {lastname}
          </h3>
          <p>{email}</p>
          <div className="ProfileCard-imgContainer-userData-city">
            <HiLocationMarker />
            <p>{city}</p>
          </div>
          <div className="ProfileCard-imgContainer-userData-date">
            <FaCalendarMinus />
            <p>
              Membre WePeak depuis{' '}
              {new Date(memberSince).toLocaleDateString('fr-FR', {
                year: 'numeric',
                month: 'long',
              })}
            </p>
          </div>
        </div>
      </div>
      <div className="ProfileCard-stats">
        <div className="ProfileCard-stats-stat left">
          <p className="ProfileCard-stats-stat-number">4</p>
          <p className="ProfileCard-stats-stat-name">Sports</p>
        </div>
        <div className="ProfileCard-stats-stat center">
          <p className="ProfileCard-stats-stat-number">3</p>
          <p className="ProfileCard-stats-stat-name">Inscriptions</p>
        </div>
        <div className="ProfileCard-stats-stat right">
          <p className="ProfileCard-stats-stat-number">8</p>
          <p className="ProfileCard-stats-stat-name">
            Activités <br /> passées
          </p>
        </div>
      </div>
      <div className="ProfileCard-bio">
        <h4 className="ProfileCard-bio-title">Bio</h4>
        <p className="ProfileCard-bio-text">
          Salut les girls, moi c'est Tom, un bogoss du 40. J'aime le surf et la
          plage. Kiss kiss.
        </p>
      </div>
    </div>
  );
};

ProfileCard.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  memberSince: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
};

export default ProfileCard;
