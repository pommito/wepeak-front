import { Link } from 'react-router-dom';

import EventCard from '../../../utils/EventCard/EventCard';
import './AcitivityGrid.scss';

const AcitivityGrid = () => {
  return (
    <div className="AcitivityGrid">
      <div className="AcitivityGrid-top">
        <h2 className="AcitivityGrid-top-title">Evènements à venir</h2>
        <Link to="/AcitivityGrid" className="AcitivityGrid-top-link">
          Voir tous les évènements
        </Link>
      </div>
      <div className="AcitivityGrid-grid">
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

export default AcitivityGrid;
