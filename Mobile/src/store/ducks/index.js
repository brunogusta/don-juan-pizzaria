import { combineReducers } from 'redux';
import userRegister from './userRegister';
import userLogin from './userLogin';
import totalValues from './totalValues';
import userCart from './userCart';

const reducers = combineReducers({
  userRegister,
  userLogin,
  totalValues,
  userCart,
});

export default reducers;
