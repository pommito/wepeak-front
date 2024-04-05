export const FETCH_ACTIVITIES_FROM_CITY = 'FETCH_ACTIVITIES_FROM_CITY';
export const FETCH_ACTIVITIES_FROM_CITY_WITH_FILTER =
  'FETCH_ACTIVITIES_FROM_CITY_WITH_FILTER';
export const HANDLE_FETCH_ACTIVITIES_FROM_CITY =
  'HANDLE_FETCH_ACTIVITIES_FROM_CITY';

export const fetchActivitiesFromCity = (
  coordinates,
  navigate = false,
  lastSearchedCity = ''
) => {
  return {
    type: FETCH_ACTIVITIES_FROM_CITY,
    coordinates,
    navigate,
    lastSearchedCity,
  };
};

export const fetchActivitiesFromCityWithFilter = (
  coordinates,
  filterName,
  filterValue,
  lastSearchedCity = ''
) => {
  return {
    type: FETCH_ACTIVITIES_FROM_CITY_WITH_FILTER,
    coordinates,
    filterName,
    filterValue,
    lastSearchedCity,
  };
};

export const handleFetchActivitiesFromCity = (
  activities,
  lastSearchedCity,
  coordinates
) => {
  return {
    type: HANDLE_FETCH_ACTIVITIES_FROM_CITY,
    activities,
    lastSearchedCity,
    coordinates,
  };
};
