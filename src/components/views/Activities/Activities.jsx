import { useEffect } from 'react';

import Button from '../../utils/Button/Button';
import EventCard from '../../utils/EventCard/EventCard';
import FilterButton from './FilterButton/FilterButton';

import './Activities.scss';

const Activities = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const data = [
    {
      title: 'Distance',
      options: [
        'Moins de 5 km',
        'Moins de 10 km',
        'Moins de 20 km',
        'Moins de 50 km',
        'Moins de 100 km',
      ],
    },
    {
      title: 'Date',
      options: [
        "Aujourd'hui",
        'Demain',
        'Ce week-end',
        'Cette semaine',
        'Ce mois-ci',
      ],
    },
    {
      title: 'Group Size',
      options: ['1-5', '6-10', '11-20'],
    },
    {
      title: 'Sports',
      options: [
        'Backcountry Skiing',
        'Hiking',
        'Mountain Biking',
        'Climbing',
        'Trail Running',
      ],
    },
  ];

  return (
    <main className="Activities">
      <h1 className="Activities-title">Evènements à proximité de [ville]</h1>
      <div className="Activities-filters">
        {data.map((item) => (
          <FilterButton
            title={item.title}
            options={item.options}
            key={item.title}
          />
        ))}
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
