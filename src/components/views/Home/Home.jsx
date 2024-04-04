// Import necessary librairies
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Import actions
import { fetchActivitiesFromCity } from '../../../actions/activityActions';
import { getUserPosition } from '../../../actions/userActions';

// Import components
import Hero from './Hero/Hero';
import ActivityGrid from './ActivityGrid/ActivityGrid';
import CtaBanner from './CtaBanner/CtaBanner';
import Faq from '../../utils/Faq/Faq';
import DoubleCta from './DoubleCta/DoubleCta';

// Import stylesheet
import './Home.scss';

const Home = () => {
  const dispatch = useDispatch();
  const activityList = useSelector((state) => state.activity.activities);

  useEffect(() => {
    window.scrollTo(0, 0);

    dispatch(getUserPosition());
  }, []);

    // THIS CODE-BLOCK HANDLE THE CITY NAME FROM USER POSITION
    fetch(
      `http://api.geonames.org/findNearbyPostalCodesJSON?lat=${userPosition.lat}&lng=${userPosition.lng}&username=nicolaschambon`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setUserPositionName(data.postalCodes[0].placeName);
        console.log(data.postalCodes[0].placeName);
      })
      .catch((error) => {
        console.error('There was an error with your fetch operation:', error);
      });
  }, []);

  return (
    <main className="Home">
      <Hero />
      <ActivityGrid userPositionName={userPositionName} />
      <CtaBanner />
      <Faq />
      <DoubleCta />
    </main>
  );
};

export default Home;
