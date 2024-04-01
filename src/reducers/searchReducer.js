import {
  CHANGE_INPUT_SEARCH,
  HANDLE_FETCH_CITIES_SEARCH,
} from '../actions/searchActions';

export const initialState = {
  input: 'city',
  cityList: [],
};

const searchReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT_SEARCH:
      return {
        ...state,
        input: action.input,
      };
    case HANDLE_FETCH_CITIES_SEARCH:
      return {
        ...state,
        cityList: action.cityList,
      };
    default:
      return state;
  }
};

export default searchReducer;
