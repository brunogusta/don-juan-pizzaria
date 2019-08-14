import { combineReducers } from 'redux';
import userRegister from './userRegister';
import userLogin from './userLogin';

const reducers = combineReducers({
  userRegister,
  userLogin,
});

export default reducers;
