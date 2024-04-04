export const FETCH_ACTIVITIES_FROM_CITY = 'FETCH_ACTIVITIES_FROM_CITY';
export const HANDLE_FETCH_ACTIVITIES_FROM_CITY =
  'HANDLE_FETCH_ACTIVITIES_FROM_CITY';
export const FETCH_ACTIVITY = 'FETCH_ACTIVITY';
export const HANDLE_FETCH_ACTIVITY = 'HANDLE_FETCH_ACTIVITY';

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

export const fetchActivity = (slug) => {
  return {
    type: FETCH_ACTIVITY,
    slug,
  };
};

export const handleFetchActivity = (activity) => {
  return {
    type: HANDLE_FETCH_ACTIVITY,
    activity,
  };
};
