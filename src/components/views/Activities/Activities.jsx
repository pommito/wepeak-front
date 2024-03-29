import Button from '../../utils/Button/Button';
import EventCard from '../../utils/EventCard/EventCard';
import './Activities.scss';

const Activities = () => {
  return (
    <div className="Activities">
      <h1 className="Activities-title">
        Evènements à proximité du seul Olympique
      </h1>
      <div className="Activities-filters"></div>
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
      <Button text="Charger la suite" className="primary" url="#" />
    </div>
  );
};

export default Activities;
