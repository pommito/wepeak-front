import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

import reducer from '../reducers/indexReducer';

import searchMiddleware from '../middleware/searchMiddleware';

const enhancers = composeWithDevTools(
  applyMiddleware(searchMiddleware)
  // ... d'autres middlewares
);

const store = createStore(reducer, enhancers);

export default store;
