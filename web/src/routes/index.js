import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import history from './history';

import SignIn from '../pages/SignIn';
import Main from '../pages/Main';
import PrivateRoute from './privateRoute';

const Routes = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route exact path="/" component={SignIn} />
      <PrivateRoute path="/main" component={Main} />
    </Switch>
  </ConnectedRouter>
);

export default Routes;
