// import { ACTION } from '../actions/contactActions';

export const initialState = {
  nameInput: '',
};

const contactReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    // case ACTION:
    //   return {
    //     ...state,
    //     nameInput: action.nameInput,
    //   };

    default:
      return state;
  }
};

export default contactReducer;
