export const FETCH_ACTIVITIES_FROM_CITY = 'FETCH_ACTIVITIES_FROM_CITY';
export const HANDLE_FETCH_ACTIVITIES_FROM_CITY =
  'HANDLE_FETCH_ACTIVITIES_FROM_CITY';

export const fetchActivitiesFromCity = (coordinates, navigate) => ({
  type: FETCH_ACTIVITIES_FROM_CITY,
  coordinates,
  navigate,
});

export const handleFetchActivitiesFromCity = (activities) => {
  return {
    type: HANDLE_FETCH_ACTIVITIES_FROM_CITY,
    activities,
  };
};
