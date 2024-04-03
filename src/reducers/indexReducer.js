import { combineReducers } from 'redux';

import userReducer from './userReducer';
import searchReducer from './searchReducer';
import activityReducer from './activityReducer';

const rootReducer = combineReducers({
  user: userReducer,
  search: searchReducer,
  activity: activityReducer,
});

export default rootReducer;
