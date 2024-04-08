import './ProfileCard.scss';

const ProfileCard = () => {
  return (
    <div className="ProfileCard">
      <div className="ProfileCard-imgContainer">
        <img
          className="ProfileCard-imgContainer-img"
          src="https://ca.slack-edge.com/T060RPZMDH6-U061SDTH4TF-c278721b6e6d-512"
          alt=""
        />
        <div className="ProfileCard-imgContainer-userData">
          <h4>Tom Fourage</h4>
          <p>User Email</p>
          <p>City</p>
          <p>Member since date</p>
        </div>
      </div>
      <div className="ProfileCard-stats">
        <div className="ProfileCard-stat">
          <p className="ProfileCard-stat-number">4</p>
          <p className="ProfileCard-stat-name">Sports</p>
        </div>
        <div className="ProfileCard-stat center">
          <p className="ProfileCard-stat-number">8</p>
          <p className="ProfileCard-stat-name">Participations</p>
        </div>
        <div className="ProfileCard-stat">
          <p className="ProfileCard-stat-number">2</p>
          <p className="ProfileCard-stat-name">Groupes</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
