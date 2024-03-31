import { CHANGE_INPUT_SEARCH } from '../actions/searchActions';

export const initialState = {
  input: 'city',
};

const searchReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT_SEARCH:
      return {
        ...state,
        input: action.input,
      };
    default:
      return state;
  }
};

export default searchReducer;
