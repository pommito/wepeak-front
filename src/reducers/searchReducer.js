// import { ACTION_EXEMPLE } from '../actions/useActions';

export const initialState = {
  // user: [],
};

const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    // case ACTION_EXEMPLE:
    //   return {
    //     ...state,
    //     user: action.toto,
    //   };
    default:
      return state;
  }
};

export default userReducer;
