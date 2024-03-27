import React from 'react';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';

import App from './components/App/App';
import store from './store';

import './styles/index.scss';

const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
