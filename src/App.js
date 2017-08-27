import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'grommet/grommet.min.css';

import createStore from './state';
import Home from './containers/Home';

const store = createStore();

export default () => (
  <Provider store={store}>
    <Router>
      <Route exact path="/" component={Home} />
    </Router>
  </Provider>
);
