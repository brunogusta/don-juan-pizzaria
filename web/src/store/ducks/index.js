import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import userLogin from './userLogin';

import history from '../../routes/history';

const reducers = combineReducers({
  userLogin,
  router: connectRouter(history),
});

export default reducers;
