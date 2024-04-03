import {
  FETCH_ACTIVITIES_FROM_CITY,
  handleFetchActivitiesFromCity,
} from '../actions/activityActions';
import { handleFetchCitiesSearch } from '../actions/searchActions';

const activityMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_ACTIVITIES_FROM_CITY: {
      fetch('http://melvinleroux-server.eddi.cloud/api/v1/activities', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(action.coordinates),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((activities) => {
          store.dispatch(handleFetchActivitiesFromCity(activities));
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
