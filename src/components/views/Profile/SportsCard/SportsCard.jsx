import { Link } from 'react-router-dom';
import './SportsCard.scss';

const SportsCard = () => {
  return (
    <div className="SportsCard">
      <h4 className="SportsCard-title">Mes sports (4)</h4>
      <div className="SportsCard-list">
        <Link to="/activities" className="SportsCard-list-sport">
          Escalade
        </Link>
        <Link to="/activities" className="SportsCard-list-sport">
          Surf
        </Link>
        <Link to="/activities" className="SportsCard-list-sport">
          Planche à voile
        </Link>
        <Link to="/activities" className="SportsCard-list-sport">
          Ski de randonnée
        </Link>
      </div>
    </div>
  );
};

export default SportsCard;
