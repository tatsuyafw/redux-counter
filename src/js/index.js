import React, { Component } from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import counterApp from './reducers';
import App from './containers/App.js';

let store = createStore(counterApp);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
