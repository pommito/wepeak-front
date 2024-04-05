// Import actions
import {
  FETCH_ACTIVITIES_FROM_CITY,
  FETCH_ACTIVITIES_FROM_CITY_WITH_FILTER,
  handleFetchActivitiesFromCity,
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
              handleFetchActivitiesFromCity(
                activities,
                action.lastSearchedCity,
                action.coordinates
              )
            );
            if (action.navigate) {
              action.navigate('/activities');
              // dispatch(resetSearch());
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
    case FETCH_ACTIVITIES_FROM_CITY_WITH_FILTER: {
      if (action.coordinates.lat) {
        fetch(
          `http://melvinleroux-server.eddi.cloud/api/v1/activities/nearby/${action.coordinates.lat}/${action.coordinates.lng}?${action.filterName}=${action.filterValue}`
        )
          .then((response) => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then((activities) => {
            store.dispatch(
              handleFetchActivitiesFromCity(
                activities,
                action.lastSearchedCity,
                action.coordinates
              )
            );
            if (action.navigate) {
              action.navigate('/activities');
              // dispatch(resetSearch());
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
    default:
  }
  return next(action);
};

export default activityMiddleware;
