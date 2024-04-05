export const FETCH_ACTIVITIES_FROM_CITY = 'FETCH_ACTIVITIES_FROM_CITY';
export const FETCH_ACTIVITIES_FROM_CITY_WITH_FILTER =
  'FETCH_ACTIVITIES_FROM_CITY_WITH_FILTER';
export const HANDLE_FETCH_ACTIVITIES_FROM_CITY =
  'HANDLE_FETCH_ACTIVITIES_FROM_CITY';
export const HANDLE_FETCH_ACTIVITIES_WITH_FILTER =
  'HANDLE_FETCH_ACTIVITIES_WITH_FILTER';

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
  lastSearchedCity,
  filterName,
  filterValue
) => {
  return {
    type: FETCH_ACTIVITIES_FROM_CITY_WITH_FILTER,
    lastSearchedCity,
    filterName,
    filterValue,
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

export const handleFetchActivitiesWithFilter = (
  activities,
  lastSearchedCity
) => {
  return {
    type: HANDLE_FETCH_ACTIVITIES_WITH_FILTER,
    activities,
    lastSearchedCity,
  };
};
