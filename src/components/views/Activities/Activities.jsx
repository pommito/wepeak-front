import { useEffect } from 'react';

import Button from '../../utils/Button/Button';
import EventCard from '../../utils/EventCard/EventCard';
import FilterButton from './FilterButton/FilterButton';

import './Activities.scss';

const Activities = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <main className="Activities">
      <h1 className="Activities-title">Evènements à proximité de [ville]</h1>
      <div className="Activities-filters">
        <FilterButton />
        <FilterButton />
        <FilterButton />
        <FilterButton />
        <FilterButton />
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
      <Button text="Voir la suite" className="primary" url="#" />
    </main>
  );
};

export default Activities;
