import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import ProjectProfile from './ProjectProfile';
import NotFound from './NotFound';

const routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/projects/:name" component={ProjectProfile} />
    <Route component={NotFound} />
  </Switch>
);

export default routes;
