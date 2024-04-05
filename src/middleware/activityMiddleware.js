// Import actions
import {
  FETCH_ACTIVITIES_FROM_CITY,
  handleFetchActivitiesFromCity,
  FETCH_ACTIVITY,
  handleFetchActivity,
  FETCH_ADRESS_FROM_COORDINATES,
  handleFetchAdress,
} from '../actions/activityActions';
import { resetSearch } from '../actions/searchActions';
import { getUserPositionName } from '../actions/userActions';

const activityMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_ACTIVITIES_FROM_CITY: {
      // We verify if the action contains coordinates because of async fetch it can be too soon have them
      if (action.coordinates.lat) {
        fetch(
          `http://melvinleroux-server.eddi.cloud/api/v1/activities/page/1/${action.coordinates.lat}/${action.coordinates.lng}`
        )
          .then((response) => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then((activities) => {
            store.dispatch(
              handleFetchActivitiesFromCity(activities, action.lastSearchedCity)
            );
            if (action.navigate) {
              action.navigate('/activities');
              store.dispatch(resetSearch());
            }
          })
          .catch((error) => {
            console.error(
              'There was an error with your fetch operation:',
              error
            );
          })
          .finally(() => {
            store.dispatch(getUserPositionName());
          });
      }
      break;
    }
    case FETCH_ACTIVITY: {
      fetch(
        `http://melvinleroux-server.eddi.cloud/api/v1/activities/${action.slug}`
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((activity) => {
          store.dispatch(handleFetchActivity(activity));
        })
        .catch((error) => {
          console.error('There was an error with your fetch operation:', error);
        })
        .finally(() => {});
      break;
    }
    case FETCH_ADRESS_FROM_COORDINATES: {
      fetch(
        `https://nominatim.openstreetmap.org/reverse.php?lat=${action.coordinates.lat}&lon=${action.coordinates.lng}&zoom=18&format=jsonv2`
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          store.dispatch(handleFetchAdress(data.address));
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
