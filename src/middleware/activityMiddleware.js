import {
  FETCH_ACTIVITIES_FROM_CITY,
  handleFetchActivitiesFromCity,
} from '../actions/activityActions';

const activityMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_ACTIVITIES_FROM_CITY: {
      fetch(
        `http://melvinleroux-server.eddi.cloud/api/v1/activities/nearby/${action.coordinates.lat}/${action.coordinates.lng}`
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((activities) => {
          store.dispatch(
            handleFetchActivitiesFromCity(activities, action.searchedCity)
          );
          action.navigate('/activities');
        })
        .catch((error) => {
          console.error('There was an error with your fetch operation:', error);
        })
        .finally(() => {});
      break;
    }
    default:
  }
  return next(action);
};

export default activityMiddleware;
