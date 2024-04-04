// Import necessary libraries
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// Import stylesheet
import './ActivityHeader.scss';

const ActivityHeader = () => {
  const activityName = useSelector((state) => state.activity.activity.name);
  const sport = useSelector((state) => state.activity.activity.sport);
  const userId = useSelector((state) => state.activity.activity.createdBy.id);
  const userPicture = useSelector(
    (state) => state.activity.activity.createdBy.thumbnail
  );
  const userName = useSelector(
    (state) => state.activity.activity.createdBy.pseudo
  );

  return (
    <div className="ActivityHeader">
      <h2 className="ActivityHeader-name">{activityName}</h2>

      {/* TODO Dynamisation of sport when available in API */}
      <h3 className="ActivityHeader-sport">Ski de randonnée</h3>

      <div className="ActivityHeader-host">
        <Link to={`/user/${userId}`}>
          <div className="ActivityHeader-host-imgContainer">
            {/* TODO Dynamisation of user picture when available in API */}
            <img
              src="https://ca.slack-edge.com/T060RPZMDH6-U0618RK2TDZ-75fbfe1c1df7-512"
              alt=""
            />
          </div>
        </Link>

        <div className="ActivityHeader-host-by">
          <p className="ActivityHeader-host-by-text">Organisée par</p>
          <Link to={`/user/${userId}`}>
            <p className="ActivityHeader-host-by-name">{userName}</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ActivityHeader;
