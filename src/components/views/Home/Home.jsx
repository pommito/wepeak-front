// Import necessary librairies
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

// Import actions
import { fetchActivitiesFromCity } from '../../../actions/activityActions';

// Import components
import Hero from './Hero/Hero';
import ActivityGrid from './ActivityGrid/ActivityGrid';
import CtaBanner from './CtaBanner/CtaBanner';
import Faq from '../../utils/Faq/Faq';
import DoubleCta from './DoubleCta/DoubleCta';

// Import stylesheet
import './Home.scss';

const Home = () => {
  // Local state to stock user position, default value is Villefranche-sur-Saône
  const [userPosition, setUserPosition] = useState({
    lat: 45.748457,
    lng: 4.846711,
  });
  const [userPositionName, setUserPositionName] = useState(
    'Villefranche-sur-Saône'
  );
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);

    // THIS CODE-BLOCK HANDLE USER POSITION
    const getUserPosition = () => {
      // navigator.geolocation is a global object that provides access to the user's location if the user consents
      if (navigator.geolocation) {
        // .getCurrentPosition method accept 2 callbacks: success and error
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setUserPosition({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            });
          },
          (error) => {
            console.error('Error getting user position:', error);
          }
        );
      } else {
        console.error('Geolocation is not supported by this browser');
      }
    };
    // Call getUserPosition function
    getUserPosition();
    dispatch(
      fetchActivitiesFromCity({ lat: userPosition.lat, lng: userPosition.lng })
    );

    // THIS CODE-BLOCK HANDLE THE FETCH OF CITY NAME FROM USER POSITION
    fetch(
      `http://api.geonames.org/findNearbyPostalCodes?lat=${userPosition.lat}&lng=${userPosition.lng}&username=nicolaschambon`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        // setUserPositionName(data.features[0].properties.city);
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
