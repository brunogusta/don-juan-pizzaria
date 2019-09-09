import React, { Fragment } from 'react';
import {
  BrowserRouter, Switch, Route, Redirect,
} from 'react-router-dom';

// import { Container } from './styles';
import SignIn from '../pages/SignIn';
import Main from '../pages/Main';


// const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route
//     {...rest}
//     render={props => (
//       isAuthenticated() ? (
//         <Component {...props} />
//       ) : (
//         <Redirect to={{ pathname: '/', state: { from: props.location } }} />
//       )
//     )}
//   />
// );


const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={SignIn} />
      {/* <PrivateRoute path="/main" component={Main} /> */}
    </Switch>
  </BrowserRouter>
);

export default Routes;
