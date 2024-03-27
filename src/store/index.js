import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

import reducer from '../reducers/indexReducer';

// import authMiddleware from '../middleware/authMiddleware';

// on combine devTools avec les middlewares
const enhancers = composeWithDevTools(
  applyMiddleware()
  // authMiddleware
  // ... d'autres middlewares
);

const store = createStore(reducer, enhancers);

export default store;
