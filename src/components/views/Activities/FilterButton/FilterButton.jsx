import PropTypes from 'prop-types';
import { useState } from 'react';
import { FaCaretDown } from 'react-icons/fa';

import './FilterButton.scss';

const FilterButton = ({ title, options, onClick, active }) => {
  return (
    <div className="FilterButton">
      <button type="button" className="FilterButton-button" onClick={onClick}>
        {title}
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
          <li className="FilterButton-dropdown-option" key={option}>
            {option}
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
