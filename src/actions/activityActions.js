export const FETCH_ACTIVITIES_FROM_CITY = 'FETCH_ACTIVITIES_FROM_CITY';
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

export const handleFetchActivitiesFromCity = (activities, lastSearchedCity) => {
  return {
    type: HANDLE_FETCH_ACTIVITIES_FROM_CITY,
    activities,
    lastSearchedCity,
  };
};
