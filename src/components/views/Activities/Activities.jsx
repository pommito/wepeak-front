// Import necessary librairies
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

// Import components
import Button from '../../utils/Button/Button';
import EventCard from '../../utils/EventCard/EventCard';
import FilterButton from './FilterButton/FilterButton';

// Import stylesheet
import './Activities.scss';

const Activities = () => {
  const activityList = useSelector((state) => state.activity.activities);
  const lastSearchedCity = useSelector(
    (state) => state.activity.lastSearchedCity
  );

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

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <main className="Activities">
      <h1 className="Activities-title">{`Evènements à proximité de ${lastSearchedCity}`}</h1>
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
        {activityList.map((activity) => (
          <EventCard
            key={activity['0'].id}
            title={activity['0'].name}
            date={activity['0'].date}
            difficulty={activity['0'].difficulty}
            slug={activity['0'].id}
          />
        ))}
      </div>
      <Button text="Voir la suite" className="primary" url="#" />
    </main>
  );
};

export default Activities;
