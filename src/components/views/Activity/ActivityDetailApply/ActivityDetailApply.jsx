import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import './ActivityDetailApply.scss';
import { handleClickOnButton } from '../../../../actions/participationsActions';

const ActivityDetailApply = ({ description }) => {
  const dispatch = useDispatch();

  return (
    <div className="Activity-detailsAndApply">
      <div className="Activity-detailsAndApply-description">
        <h3>Description</h3>
        <p>{description}</p>
      </div>

      <button
        type="button"
        className="Activity-detailsAndApply-apply"
        onClick={() => {
          dispatch(handleClickOnButton());
        }}
      >
        Participer
      </button>
    </div>
  );
};

ActivityDetailApply.propTypes = {
  description: PropTypes.string.isRequired,
};

export default ActivityDetailApply;
