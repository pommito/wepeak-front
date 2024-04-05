import {
  HANDLE_FETCH_ACTIVITIES_FROM_CITY,
  HANDLE_FETCH_ACTIVITIES_WITH_FILTER,
} from '../actions/activityActions';

export const initialState = {
  activities: [],
  lastSearchedCity: {},
};

const activityReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case HANDLE_FETCH_ACTIVITIES_FROM_CITY:
      return {
        ...state,
        activities: action.activities,
        lastSearchedCity: {
          name: action.lastSearchedCity,
          coordinates: action.coordinates,
        },
      };
    case HANDLE_FETCH_ACTIVITIES_WITH_FILTER:
      return {
        ...state,
        activities: action.activities,
        lastSearchedCity: action.lastSearchedCity,
      };

    default:
      return state;
  }
};

export default activityReducer;
