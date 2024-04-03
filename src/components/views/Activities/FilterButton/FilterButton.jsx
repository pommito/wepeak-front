import PropTypes from 'prop-types';
import { useState } from 'react';
import { FaCaretDown } from 'react-icons/fa';

import './FilterButton.scss';

const FilterButton = ({ title, options }) => {
  const [isOpen, setIsOpen] = useState(false);

  console.log(options);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="FilterButton">
      <button
        type="button"
        className="FilterButton-button"
        onClick={() => {
          toggle();
        }}
      >
        {title}
        <FaCaretDown
          className={
            isOpen
              ? `FilterButton-button-icon show`
              : `FilterButton-button-icon`
          }
        />
      </button>
      <ul
        className={
          isOpen ? `FilterButton-dropdown show` : `FilterButton-dropdown`
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
