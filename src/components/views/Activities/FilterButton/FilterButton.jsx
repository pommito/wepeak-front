import './FilterButton.scss';

const FilterButton = () => {
  return (
    <div className="FilterButton">
      <button type="button" className="FilterButton-button">
        Tous les évènements
      </button>
      <ul className="FilterButton-dropdown">
        <li>Lyon</li>
        <li>Annecy</li>
        <li>Grenoble</li>
      </ul>
    </div>
  );
};

export default FilterButton;
