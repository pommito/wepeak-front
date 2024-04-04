import { HANDLE_USER_POSITION } from '../actions/userActions';

export const initialState = {
  userPosition: {},
};

const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case HANDLE_USER_POSITION:
      return {
        ...state,
        userPosition: action.coordinates,
      };
    default:
      return state;
  }
};

export default userReducer;
