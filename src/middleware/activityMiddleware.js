import { FETCH_ACTIVITIES_FROM_CITY } from '../actions/activityActions';

const activityMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_ACTIVITIES_FROM_CITY: {
      break;
    }
    default:
  }
  return next(action);
};

export default activityMiddleware;
