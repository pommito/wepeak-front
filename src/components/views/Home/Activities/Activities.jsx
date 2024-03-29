import { Link } from 'react-router-dom';

import EventCard from '../../../utils/EventCard/EventCard';
import './Activities.scss';

const Activities = () => {
  return (
    <div className="Activities">
      <div className="Activities-top">
        <h2 className="Activities-top-title">Evènements à venir</h2>
        <Link to="/activities" target="_blank" className="Activities-top-link">
          Voir tous les évènements
        </Link>
      </div>
      <div className="Activities-grid">
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

export default Activities;
