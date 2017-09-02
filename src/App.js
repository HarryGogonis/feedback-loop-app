import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import 'grommet/grommet.min.css';

import createStore from './state';

import App from 'grommet/components/App';
import Article from 'grommet/components/Article'

import Header from './components/Header';
import Routes from './routes';

const store = createStore();

export default () => (
  <Provider store={store}>
    <Router>
      <App centered={false}>
        <Article>
          <Header />
          <Routes />
        </Article>
      </App>
    </Router>
  </Provider>
);
