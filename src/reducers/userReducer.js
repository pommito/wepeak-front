import {
  HANDLE_USER_POSITION,
  HANDLE_USER_POSITION_NAME,
  CHANGE_LOGIN_INPUT,
} from '../actions/userActions';

export const initialState = {
  userPosition: {},
  userPositionName: '',
  emailInputLogin: '',
  passwordInputLogin: '',
};

const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case HANDLE_USER_POSITION:
      return {
        ...state,
        userPosition: action.coordinates,
      };
    case HANDLE_USER_POSITION_NAME:
      return {
        ...state,
        userPositionName: action.userPositionName,
      };
    case CHANGE_LOGIN_INPUT:
      return {
        ...state,
        [action.identifier]: action.value,
      };
    default:
      return state;
  }
};

export default userReducer;
