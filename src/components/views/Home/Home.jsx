// Import necessary librairies
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Import actions
import { fetchActivitiesFromCity } from '../../../actions/activityActions';
import {
  getUserPosition,
  getUserPositionName,
} from '../../../actions/userActions';

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
  const userPosition = useSelector((state) => state.user.userPosition);
  const userPositionName = useSelector((state) => state.user.userPositionName);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    dispatch(getUserPosition());
    dispatch(
      fetchActivitiesFromCity({
        lat: userPosition.lat,
        lng: userPosition.lng,
      })
    );
    dispatch(getUserPositionName(userPosition));
  }, [userPositionName]);

  return (
    <main className="Home">
      <Hero />
      <ActivityGrid userPositionName="toto" />
      <CtaBanner />
      <Faq />
      <DoubleCta />
    </main>
  );
};

export default Home;
