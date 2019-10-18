import React, { Fragment } from 'react';
import { Provider } from 'react-redux';

import './config/reactotronConfig';

import Routes from './routes';
import GlobalStyle from './styles/global';

import store from './store';

const App = () => (
  <Fragment>
    <Provider store={store}>
      <GlobalStyle />
      <Routes />
    </Provider>
  </Fragment>
);


export default App;
