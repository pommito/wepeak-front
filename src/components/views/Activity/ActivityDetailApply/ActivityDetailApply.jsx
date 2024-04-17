import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import {
  handleClickOnSignInButton,
  handleClickOnSignOffButton,
} from '../../../../actions/participationsActions';
import './ActivityDetailApply.scss';

const ActivityDetailApply = ({
  description,
  user = {},
  people,
  groupSize,
  createdBy,
}) => {
  console.log(people, groupSize, user, createdBy);
  const dispatch = useDispatch();

  const isUserOrganizer = user === createdBy;
  const isUserParticipating = people.some((person) => person.user.id === user);
  let userParticipation = {};

  if (isUserParticipating) {
    userParticipation = people.find((person) => person.user.id === user);
  }

  return (
    <div className="Activity-detailsAndApply">
      <div className="Activity-detailsAndApply-description">
        <h3>Description</h3>
        <p>{description}</p>
      </div>

      {!isUserParticipating && (
        <button
          type="button"
          className="Activity-detailsAndApply-button sign-in"
          onClick={() => {
            dispatch(handleClickOnSignInButton());
          }}
        >
          Participer
        </button>
      )}

      {isUserParticipating && !isUserOrganizer && (
        <button
          type="button"
          className="Activity-detailsAndApply-button sign-off"
          onClick={() => {
            dispatch(handleClickOnSignOffButton(userParticipation.id));
          }}
        >
          Se desinscrire
        </button>
      )}
      {isUserOrganizer && (
        <button type="button" className="Activity-detailsAndApply-button edit">
          Modifier mon activité
        </button>
      )}
    </div>
  );
};

ActivityDetailApply.propTypes = {
  description: PropTypes.string.isRequired,
};

export default ActivityDetailApply;
