import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import './ActivityDetailApply.scss';
import { handleClickOnButton } from '../../../../actions/participationsActions';

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

  return (
    <div className="Activity-detailsAndApply">
      <div className="Activity-detailsAndApply-description">
        <h3>Description</h3>
        <p>{description}</p>
      </div>

      {!isUserParticipating && (
        <button
          type="button"
          className="Activity-detailsAndApply-apply"
          onClick={() => {
            dispatch(handleClickOnButton());
          }}
        >
          Participer
        </button>
      )}

      {isUserParticipating && !isUserOrganizer && (
        <>
          <p className="Activity-detailsAndApply-text">
            Vous êtes déjà inscrit
          </p>
          <button
            type="button"
            className="Activity-detailsAndApply-apply"
            onClick={() => {
              dispatch(handleClickOnButton());
            }}
          >
            Se desinscrire
          </button>
        </>
      )}
      {isUserOrganizer && (
        <button
          type="button"
          className="Activity-detailsAndApply-apply"
          onClick={() => {
            dispatch(handleClickOnButton());
          }}
        >
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
