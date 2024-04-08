import ProfileCard from './ProfileCard/ProfileCard';
import EditProfile from './EditProfile/EditProfile';
import SportsCard from './SportsCard/SportsCard';
import ParticipationsCard from './ParticipationsCard/ParticipationsCard';
import TeamsCard from './TeamsCard/TeamsCard';

import './Profile.scss';

const Profile = () => {
  return (
    <main className="Profile">
      <div className="Profile-left">
        <ProfileCard className="Profile-left-profileCard" />
        <EditProfile className="Profile-left-editProfile" />
      </div>
      <div className="Profile-right">
        <SportsCard className="Profile-right-sportsCard" />
        <ParticipationsCard className="Profile-right-participationsCard" />
        <TeamsCard className="Profile-right-teamsCard" />
      </div>
    </main>
  );
};

export default Profile;
