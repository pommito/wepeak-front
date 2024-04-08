import { HiLocationMarker } from 'react-icons/hi';
import { FaCalendarMinus } from 'react-icons/fa6';

import './ProfileCard.scss';

const ProfileCard = () => {
  return (
    <div className="ProfileCard">
      <div className="ProfileCard-imgContainer">
        <img
          className="ProfileCard-imgContainer-img"
          src="https://ca.slack-edge.com/T060RPZMDH6-U061SDTH4TF-c278721b6e6d-512"
          alt=""
        />
        <div className="ProfileCard-imgContainer-userData">
          <h4>Tom Fourage</h4>
          <p>tom.fourage.dev@gmail.com</p>
          <div className="ProfileCard-imgContainer-userData-city">
            <HiLocationMarker />
            <p>Seignosse</p>
          </div>
          <div className="ProfileCard-imgContainer-userData-date">
            <FaCalendarMinus />
            <p>Membre WePeak depuis : avri. 2024</p>
          </div>
        </div>
      </div>
      <div className="ProfileCard-stats">
        <div className="ProfileCard-stats-stat">
          <p className="ProfileCard-stats-stat-number">4</p>
          <p className="ProfileCard-stats-stat-name">Sports</p>
        </div>
        <div className="ProfileCard-stats-stat center">
          <p className="ProfileCard-stats-stat-number">8</p>
          <p className="ProfileCard-stats-stat-name">Participations</p>
        </div>
        <div className="ProfileCard-stats-stat">
          <p className="ProfileCard-stats-stat-number">2</p>
          <p className="ProfileCard-stats-stat-name">Groupes</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
