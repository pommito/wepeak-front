import { useState } from 'react';
import { FaCaretDown } from 'react-icons/fa';

import './FilterButton.scss';

const FilterButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const data = {
    text: 'Localisation',
    option: [
      'Lyon',
      'Annecy',
      'Grenoble',
      'Chambéry',
      'Aix-les-Bains',
      'Albertville',
      'Paris',
      'Marseille',
      'Toulouse',
      'Bordeaux',
      'Nantes',
      'Lille',
      'Strasbourg',
      'Montpellier',
      'Rennes',
    ],
  };

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
        {data.text}
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
        {data.option.map((option) => (
          <li className="FilterButton-dropdown-option" key={option}>
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterButton;
