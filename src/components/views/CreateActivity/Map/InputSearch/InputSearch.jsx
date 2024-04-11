import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  changeInputSearch,
  changeInputSearchValue,
  fetchCitiesSearch,
  resetSearch,
} from '../../../../../actions/searchActions';
import { fetchActivitiesFromCity } from '../../../../../actions/activityActions';

import './InputSearch.scss';

const InputSearch = ({ id }) => {
  const dispatch = useDispatch();
  const [searchTimeout, setSearchTimeout] = useState(null);
  const areaInput = useSelector((state) => state.search.searchedCity.name);
  const cityList = useSelector((state) => state.search.cityList);

  const handleAreaInput = (value, identifier) => {
    dispatch(changeInputSearchValue(value, identifier));
    // If a timeout is already set, we clear it
    if (searchTimeout) {
      clearTimeout(searchTimeout);
    }
    if (value.length > 2) {
      // Launch a new timeout to call Cities search API after 500ms
      const timeout = setTimeout(() => {
        dispatch(fetchCitiesSearch(identifier));
      }, 500);
      // Update searchTimeout state with the new timeout
      setSearchTimeout(timeout);
    }
  };

  // THIS CODE-BLOCK HANDLE REMOVING OF CITIES SUGGESTIONS WHEN CLICKING OUTSIDE
  useEffect(() => {
    if (cityList.length < 20 && cityList.length > 0) {
      const handleClickOutside = (e) => {
        // If click is outside the search input, we reset the city list suggestion
        if (!e.target.closest('.Header-form-search')) {
          dispatch(resetSearch());
        }
      };
      // Event listener on click
      document.addEventListener('click', handleClickOutside);
      // Clean event listener on component unmount
      return () => {
        document.removeEventListener('click', handleClickOutside);
      };
    }
  });

  return (
    <>
      <input
        type="text"
        className="InputSearch"
        id={id}
        placeholder="Commune, code postal"
        value={areaInput}
        onChange={(e) => {
          handleAreaInput(e.target.value, 'createActivity');
        }}
      />
      {areaInput.length > 2 && cityList.length < 20 && cityList.length > 0 && (
        <div className="Header-form-search-cities">
          {cityList.map((city) => (
            <button
              key={city.postalCode}
              type="button"
              className="Header-form-search-cities-city"
              onClick={() => {
                dispatch(
                  fetchActivitiesFromCity(
                    { lat: city.lat, lng: city.lng },
                    city.placeName
                  )
                );
              }}
            >
              {city.placeName}, {city.postalCode}
            </button>
          ))}
        </div>
      )}
    </>
  );
};

export default InputSearch;
