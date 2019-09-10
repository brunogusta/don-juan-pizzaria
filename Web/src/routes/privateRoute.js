import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import {
  Route,
  Redirect,
} from 'react-router-dom';


const PrivateRoute = ({ component: Component, ...rest }) => {
  const { userLogin } = useSelector(state => state);
  const adm = JSON.parse(window.localStorage.getItem('adm'));

  console.log(adm.admin);
  return (
    <Route
      {...rest}
      render={props => (
        userLogin.user.admin || adm.admin ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        )
      )}
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.shape().isRequired,
  location: PropTypes.shape().isRequired,
};


export default PrivateRoute;
