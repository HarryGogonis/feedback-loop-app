import { createStore, applyMiddleware, compose } from 'redux';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import thunk from 'redux-thunk';
import firebaseConfig from './firebaseConfig';

export default (rootReducer) => {
  const middleware = [
    thunk.withExtraArgument(getFirebase),
  ];
  const enhancers = [
    reactReduxFirebase(firebaseConfig, {
      userProfile: 'users',
       profileParamsToPopulate: [ 'sites:sites' ]
    }),
  ];

  enhancers.push(applyMiddleware(...middleware));

  return createStore(rootReducer, compose(...enhancers));
};
