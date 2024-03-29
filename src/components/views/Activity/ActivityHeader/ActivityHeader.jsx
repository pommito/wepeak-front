import { Link } from 'react-router-dom';

import './ActivityHeader.scss';

const ActivityHeader = () => {
  return (
    <div className="ActivityHeader">
      <h2 className="ActivityHeader-name">Trou de la mouche</h2>
      <h3 className="ActivityHeader-sport">Ski de randonnée</h3>

      <div className="ActivityHeader-host">
        <Link to="/user/id">
          <div className="ActivityHeader-host-imgContainer">
            <img
              src="https://ca.slack-edge.com/T060RPZMDH6-U0618RK2TDZ-75fbfe1c1df7-512"
              alt=""
            />
          </div>
        </Link>

        <div className="ActivityHeader-host-by">
          <p className="ActivityHeader-host-by-text">Organisée par</p>
          <Link to="/user/id">
            <p className="ActivityHeader-host-by-name">Victor Lebecq</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ActivityHeader;
