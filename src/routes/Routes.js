import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Section from 'grommet/components/Section';
import Login from './Login';
import Site from './Site';
import NewSite from './NewSite';
import GenericNotFound from './GenericNotFound';

export default () => (
  <Section>
    <Switch>
      <Route exact path='/' component={Login}/>
      <Route exact path='/sites/new' component={NewSite} />
      <Route path='/sites/:siteKey' component={Site} />
      <Route component={GenericNotFound} />
    </Switch>
  </Section>
)
