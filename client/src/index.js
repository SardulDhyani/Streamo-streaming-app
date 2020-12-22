import React from 'react';
import ReactDom from 'react-dom';
import  { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/App';
import reducers from './Reducers';

const store = createStore(reducers);

ReactDom.render(
  <Provider store={store}>
    <App /> 
  </Provider>,
  document.querySelector('#root')
)
