import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import authReducer from './authReducer';
import streamReducer from './StreamReducer';
import selectedStreamReducer from './SelectedStreamReducer';

export default combineReducers({
  auth : authReducer,
  streams : streamReducer,
  selectedStream : selectedStreamReducer,
  form : formReducer
});
