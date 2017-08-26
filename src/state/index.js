import { combineReducers } from 'redux';
import { firebaseStateReducer as firebase } from 'react-redux-firebase';

import configureStore from './configureStore';

export default () => configureStore(
  combineReducers({
    firebase,
  }),
);
