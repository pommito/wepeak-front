import { CHANGE_CONTACT_INPUT } from '../actions/contactActions';

export const initialState = {
  nameInput: '',
  emailInput: '',
  phoneInput: '',
  companyInput: '',
  messageInput: '',
};

const contactReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_CONTACT_INPUT:
      return {
        ...state,
        [action.identifier]: action.value,
      };
    default:
      return state;
  }
};

export default contactReducer;
