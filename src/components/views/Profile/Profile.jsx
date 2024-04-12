// Import necessary libraries
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

// Import actions
import { fetchUserWithId } from '../../../actions/userActions';

// Import sub-components
import ProfileCard from './ProfileCard/ProfileCard';
import EditProfile from './EditProfile/EditProfile';
import SportsCard from './SportsCard/SportsCard';
import ParticipationsCard from './ParticipationsCard/ParticipationsCard';

// Import stylesheet
import './Profile.scss';

const Profile = () => {
  const dispatch = useDispatch();

  const userState = useSelector((state) => state.user);
  const userId = userState.loggedData?.user.id;

  useEffect(() => {
    // If userId is not null, fetch the user with the id
    if (userId) {
      dispatch(fetchUserWithId(userId));
    }
  }, [userId, dispatch]);

  const user = useSelector((state) => state.user.currentUser);

  return (
    <main className="Profile">
      <div className="Profile-left">
        <ProfileCard
          className="Profile-left-profileCard"
          firstname={user.firstname}
          lastname={user.lastname}
          email={user.email}
          city={user.city}
          memberSince={user.createdAt}
          thumbnail={user.thumbnail}
          bio={user.description}
          participations={user.participations}
        />
        <EditProfile
          className="Profile-left-editProfile"
          firstname={user.firstname}
          lastname={user.lastname}
          thumbnail={user.thumbnail}
        />
      </div>
      <div className="Profile-right">
        <SportsCard className="Profile-right-sportsCard" />
        <ParticipationsCard
          className="Profile-right-subscriptionCard"
          title="Mes inscriptions"
          number="3"
        />
        <ParticipationsCard
          className="Profile-right-pastActivitiesCard"
          title="Mes activités passées"
          number="8"
        />
      </div>
    </main>
  );
};

export default Profile;
