import { combineReducers } from 'redux';
import userRegister from './userRegister';
import userLogin from './userLogin';
import totalValues from './totalValues';
import orders from './orders';
import userPreferences from './userPreferences';

const reducers = combineReducers({
  userRegister,
  userLogin,
  totalValues,
  orders,
  userPreferences,
});

export default reducers;
