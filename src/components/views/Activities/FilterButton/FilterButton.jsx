import { useState } from 'react';

import './FilterButton.scss';

const FilterButton = () => {
  const [isOpen, setIsOpen] = useState(false);

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
        Tous les évènements
      </button>
      <ul
        className={
          isOpen ? `FilterButton-dropdown show` : `FilterButton-dropdown`
        }
      >
        <li>Lyon</li>
        <li>Annecy</li>
        <li>Grenoble</li>
      </ul>
    </div>
  );
};

export default FilterButton;
