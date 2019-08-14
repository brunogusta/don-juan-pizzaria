import './config/ReactotronConfig';
import React from 'react';
import { StatusBar } from 'react-native';
import FlashMessage from 'react-native-flash-message';

import { Provider } from 'react-redux';
import store from './store';

import Routes from './routes';

const App = () => (
  <Provider store={store}>
    <StatusBar hidden barStyle="light-content" backgroundColor="#2B262B" />
    <Routes />
    <FlashMessage position="top" />
  </Provider>
);

export default App;
