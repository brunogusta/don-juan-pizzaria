import { combineReducers } from 'redux';
import userRegister from './userRegister';
import userLogin from './userLogin';
import totalValues from './totalValues';
import orders from './orders';

const reducers = combineReducers({
  userRegister,
  userLogin,
  totalValues,
  orders,
});

export default reducers;
