export const FETCH_ACTIVITIES_FROM_CITY = 'FETCH_ACTIVITIES_FROM_CITY';
export const HANDLE_FETCH_ACTIVITIES_FROM_CITY =
  'HANDLE_FETCH_ACTIVITIES_FROM_CITY';

export const fetchActivitiesFromCity = () => ({
  type: FETCH_ACTIVITIES_FROM_CITY,
});

export const handleFetchActivitiesFromCity = (activities) => {
  return {
    type: HANDLE_FETCH_ACTIVITIES_FROM_CITY,
    activities,
  };
};
