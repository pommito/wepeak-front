// Import necessary libraries
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Import components
import ActivityHeader from './ActivityHeader/ActivityHeader';
import ActivityIllustration from './ActivityIllustration/ActivityIllustration';
import ActivityDetailApply from './ActivityDetailApply/ActivityDetailApply';
import ActivityPeople from './ActivityPeople/ActivityPeople';
import ActivityPictures from './ActivityPictures/ActivityPictures';

// Import stylesheet
import './Activity.scss';

const Activity = () => {
  // useLocation
  const slug = useLocation().pathname.replace('/activities/', '');

  console.log(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  });
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
