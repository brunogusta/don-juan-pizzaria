import { combineReducers } from 'redux';
import userRegister from './userRegister';
import userLogin from './userLogin';
import totalValues from './totalValues';

const reducers = combineReducers({
  userRegister,
  userLogin,
  totalValues,
});

export default reducers;
