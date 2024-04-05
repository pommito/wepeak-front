import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import { FaCaretDown } from 'react-icons/fa';
import { fetchActivitiesFromCityWithFilter } from '../../../../actions/activityActions';

import './FilterButton.scss';

const FilterButton = ({ title, options, onClick, active }) => {
  const dispatch = useDispatch();
  const lastSearchedCity = useSelector(
    (state) => state.activity.lastSearchedCity
  );

  return (
    <div className="FilterButton">
      <button type="button" className="FilterButton-button" onClick={onClick}>
        {title.label}
        <FaCaretDown
          className={
            active
              ? `FilterButton-button-icon show`
              : `FilterButton-button-icon`
          }
        />
      </button>
      <ul
        className={
          active ? `FilterButton-dropdown show` : `FilterButton-dropdown`
        }
      >
        {options.map((option) => (
          <li
            className="FilterButton-dropdown-option"
            key={option.label}
            value={option.value}
            onClick={() => {
              dispatch(
                fetchActivitiesFromCityWithFilter(
                  lastSearchedCity.coordinates,
                  title.value,
                  option.value
                )
              );
            }}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

FilterButton.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
};

export default FilterButton;
