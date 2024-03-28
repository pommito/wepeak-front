import EventCard from '../../../utils/EventCard/EventCard';
import './Activities.scss';

const Activities = () => {
  return (
    <div className="Activities">
      <h2>Evènements à venir</h2>
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
