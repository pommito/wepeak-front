import { useEffect } from 'react';

import ActivityHeader from './ActivityHeader/ActivityHeader';
import ActivityIllustration from './ActivityIllustration/ActivityIllustration';
import ActivityDetailApply from './ActivityDetailApply/ActivityDetailApply';
import ActivityPeople from './ActivityPeople/ActivityPeople';
import ActivityPictures from './ActivityPictures/ActivityPictures';

import './Activity.scss';

const Activity = () => {
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
