import { HANDLE_FETCH_ACTIVITIES_FROM_CITY } from '../actions/activityActions';

export const initialState = {
  activities: [],
  lastSearchedCity: '',
};

const activityReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case HANDLE_FETCH_ACTIVITIES_FROM_CITY:
      return {
        ...state,
        activities: action.activities,
        lastSearchedCity: action.searchedCity,
      };

    default:
      return state;
  }
};

export default activityReducer;
