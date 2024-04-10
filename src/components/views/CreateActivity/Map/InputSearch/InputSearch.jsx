import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  changeInputSearchValue,
  fetchCitiesSearch,
  fetchCitiesSearchBis,
  handleSelectedCity,
  resetSearch,
} from '../../../../../actions/searchActions';
import { fetchActivitiesFromCity } from '../../../../../actions/activityActions';

import './InputSearch.scss';

const InputSearch = ({ id }) => {
  const dispatch = useDispatch();
  const [searchTimeout, setSearchTimeout] = useState(null);
  const areaInput = useSelector((state) => state.search.searchedCity.name);
  const cityList = useSelector((state) => state.search.cityList);

  const handleAreaInput = (value) => {
    dispatch(changeInputSearchValue(value));
    // If a timeout is already set, we clear it
    if (searchTimeout) {
      clearTimeout(searchTimeout);
    }
    if (value.length > 2) {
      // Launch a new timeout to call Cities search API after 500ms
      const timeout = setTimeout(() => {
        dispatch(fetchCitiesSearchBis(value));
      }, 500);
      // Update searchTimeout state with the new timeout
      setSearchTimeout(timeout);
    }
  };

  return (
    <>
      <input
        type="text"
        className="InputSearch"
        id={id}
        placeholder="Commune, code postal"
        value={areaInput}
        onChange={(e) => {
          handleAreaInput(e.target.value);
        }}
      />
      {areaInput.length > 2 && cityList.length < 20 && cityList.length > 0 && (
        <div className="InputSearch-dropdown">
          {cityList.map((city) => (
            <button
              key={city.postalCode}
              type="button"
              className="InputSearch-dropdown-item"
              onClick={() => {
                dispatch(
                  handleSelectedCity({
                    name: city.placeName,
                    lat: city.lat,
                    lng: city.lng,
                  })
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
