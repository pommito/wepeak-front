import {
  HANDLE_USER_POSITION,
  HANDLE_USER_POSITION_NAME,
  CHANGE_LOGIN_INPUT,
  HANDLE_SUCCESS_LOGIN,
  SET_LOGIN_ERROR_MESSAGE,
} from '../actions/userActions';

export const initialState = {
  userPosition: {},
  userPositionName: '',
  emailInputLogin: '',
  passwordInputLogin: '',
  loggedData: {},
  loginErrorMessage: '',
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
    case HANDLE_SUCCESS_LOGIN:
      return {
        ...state,
        loggedData: action.loggedData,
      };
    case SET_LOGIN_ERROR_MESSAGE:
      return {
        ...state,
        loginErrorMessage: action.message,
      };
    default:
      return state;
  }
};

export default userReducer;
