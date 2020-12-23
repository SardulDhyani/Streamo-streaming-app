import React from 'react';
import ReactDom from 'react-dom';
import  { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

import App from './components/App';
import reducers from './Reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore( reducers, composeEnhancers(applyMiddleware()) );


ReactDom.render(
  <Provider store={store}>
    <App /> 
  </Provider>,
  document.querySelector('#root')
)
