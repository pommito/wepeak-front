import PropTypes from 'prop-types';
import { useState } from 'react';
import { FaCaretDown } from 'react-icons/fa';

import './FilterButton.scss';

const FilterButton = ({ title, options, onClick, active }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

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
};

export default FilterButton;
