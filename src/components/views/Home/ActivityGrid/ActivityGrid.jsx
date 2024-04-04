import { Link } from 'react-router-dom';

import EventCard from '../../../utils/EventCard/EventCard';
import './ActivityGrid.scss';

const ActivityGrid = ({ userPositionName }) => {
  return (
    <div className="ActivityGrid">
      <div className="ActivityGrid-top">
        <h2 className="ActivityGrid-top-title">
          Evènements à venir proches de {userPositionName}
        </h2>
        <Link to="/ActivityGrid" className="ActivityGrid-top-link">
          Voir tous les évènements
        </Link>
      </div>
      <div className="ActivityGrid-grid">
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
    </div>
  );
};

export default ActivityGrid;
