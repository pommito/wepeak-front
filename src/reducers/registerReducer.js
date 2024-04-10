import {
  CHANGE_REGISTER_INPUT,
  // SET_ERROR_MESSAGE,
  // SET_SUCCESS_MESSAGE,
  // RESET_REGISTER_FORM,
} from '../actions/registerActions';

export const initialState = {
  firstnameInput: '',
  lastnameInput: '',
  usernameInput: '',
  emailInput: '',
  passwordInput: '',
  cityInput: '',
  birthdateInput: '',
  ageInput: false,
  // errorMessage: '',
  // successMessage: '',
};

const contactReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_REGISTER_INPUT:
      return {
        ...state,
        [action.identifier]: action.value,
      };
    // case SET_ERROR_MESSAGE:
    //   return {
    //     ...state,
    //     errorMessage: action.message,
    //   };
    // case SET_SUCCESS_MESSAGE:
    //   return {
    //     ...state,
    //     successMessage: action.message,
    //   };
    // case RESET_REGISTER_FORM:
    //   return {
    //     ...initialState,
    //   };
    default:
      return state;
  }
};

export default contactReducer;
