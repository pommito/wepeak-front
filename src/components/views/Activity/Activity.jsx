// Import necessary libraries
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// Import actions
import { fetchActivity } from '../../../actions/activityActions';

// Import components
import ActivityHeader from './ActivityHeader/ActivityHeader';
import ActivityIllustration from './ActivityIllustration/ActivityIllustration';
import ActivityDetailApply from './ActivityDetailApply/ActivityDetailApply';
import ActivityPeople from './ActivityPeople/ActivityPeople';
import ActivityPictures from './ActivityPictures/ActivityPictures';

// Import stylesheet
import './Activity.scss';

const Activity = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const dispatch = useDispatch();

  // useLocation().pathname returns the current URL of the browser
  // we removed the '/activities/' part of the URL to get the slug
  const slug = useLocation().pathname.replace('/activities/', '');

  useEffect(() => {
    dispatch(fetchActivity(slug));
  }, [slug, dispatch]);

  return (
    <main className="Activity">
      <ActivityHeader />
      <ActivityIllustration />
      <ActivityDetailApply />
      <ActivityPeople />
      <ActivityPictures />
    </main>
  );
};

export default Activity;
