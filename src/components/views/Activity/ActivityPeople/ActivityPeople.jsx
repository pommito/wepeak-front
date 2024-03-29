import { Link } from 'react-router-dom';

import './ActivityPeople.scss';

const ActivityPeople = () => {
  return (
    <div className="ActivityPeople">
      <h3>Participants [6]</h3>
      <div className="ActivityPeople-cards">
        <Link to="/user/id">
          <div className="ActivityPeople-cards-card">
            <div className="ActivityPeople-cards-card-imgContainer">
              <img
                src="https://ca.slack-edge.com/T060RPZMDH6-U06160CTFNZ-5a4cda8a8782-512"
                alt=""
              />
            </div>

            <p className="ActivityPeople-cards-card-name">Melvin</p>
          </div>
        </Link>
        <Link to="/user/id">
          <div className="ActivityPeople-cards-card">
            <div className="ActivityPeople-cards-card-imgContainer">
              <img
                src="https://ca.slack-edge.com/T060RPZMDH6-U0619H5V5DG-7ee094234be2-512"
                alt=""
              />
            </div>

            <p className="ActivityPeople-cards-card-name">Nicolas</p>
          </div>
        </Link>
        <Link to="/user/id">
          <div className="ActivityPeople-cards-card">
            <div className="ActivityPeople-cards-card-imgContainer">
              <img
                src="https://ca.slack-edge.com/T060RPZMDH6-U06160CTFNZ-5a4cda8a8782-512"
                alt=""
              />
            </div>

            <p className="ActivityPeople-cards-card-name">Melvin</p>
          </div>
        </Link>
        <Link to="/user/id">
          <div className="ActivityPeople-cards-card">
            <div className="ActivityPeople-cards-card-imgContainer">
              <img
                src="https://ca.slack-edge.com/T060RPZMDH6-U0619H5V5DG-7ee094234be2-512"
                alt=""
              />
            </div>

            <p className="ActivityPeople-cards-card-name">Nicolas</p>
          </div>
        </Link>
        <Link to="/user/id">
          <div className="ActivityPeople-cards-card">
            <div className="ActivityPeople-cards-card-imgContainer">
              <img
                src="https://ca.slack-edge.com/T060RPZMDH6-U06160CTFNZ-5a4cda8a8782-512"
                alt=""
              />
            </div>

            <p className="ActivityPeople-cards-card-name">Melvin</p>
          </div>
        </Link>
        <Link to="/user/id">
          <div className="ActivityPeople-cards-card">
            <div className="ActivityPeople-cards-card-imgContainer">
              <img
                src="https://ca.slack-edge.com/T060RPZMDH6-U0619H5V5DG-7ee094234be2-512"
                alt=""
              />
            </div>

            <p className="ActivityPeople-cards-card-name">Nicolas</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ActivityPeople;
