// Import necessary libraries
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

// Import actions
import { fetchUserWithId } from '../../../actions/userActions';

// Import sub-components
import ProfileCard from '../Profile/ProfileCard/ProfileCard';
import SportsCard from '../Profile/SportsCard/SportsCard';
import ParticipationsCard from '../Profile/ParticipationsCard/ParticipationsCard';

// Import stylesheet
import './UserPage.scss';

const UserPage = () => {
  return <main className="UserPage">UserPage</main>;
};

export default UserPage;
