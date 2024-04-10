import {
  CHANGE_INPUT_SEARCH,
  CHANGE_INPUT_SEARCH_VALUE,
  HANDLE_FETCH_CITIES_SEARCH,
  HANDLE_FETCH_CITIES_SEARCH_BIS,
  HANDLE_SELECTED_CITY,
  RESET_SEARCH,
} from '../actions/searchActions';

export const initialState = {
  input: '',
  cityList: [],
  searchedCity: {
    name: '',
    lat: '',
    lng: '',
  },
};

const searchReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT_SEARCH:
      return {
        ...state,
        input: action.input,
      };
    case CHANGE_INPUT_SEARCH_VALUE:
      return {
        ...state,
        searchedCity: {
          ...state.searchedCity,
          name: action.value,
        },
      };
    case HANDLE_FETCH_CITIES_SEARCH:
      return {
        ...state,
        cityList: action.cityList,
      };
    case HANDLE_FETCH_CITIES_SEARCH_BIS:
      return {
        ...state,
        cityList: action.cityList,
      };
    case HANDLE_SELECTED_CITY:
      return {
        ...state,
        searchedCity: {
          name: action.city.placeName,
          lat: action.city.lat,
          lng: action.city.lng,
        },
      };
    case RESET_SEARCH:
      return {
        ...state,
        cityList: [],
      };
    default:
      return state;
  }
};

export default searchReducer;
