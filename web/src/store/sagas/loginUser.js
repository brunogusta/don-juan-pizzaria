/* eslint-disable no-underscore-dangle */
import { put } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import api from '../../services/api';
import { Creators as LoginActions } from '../ducks/userLogin';


export function* loginUserSaga(perfil) {
  try {
    const { email, password } = perfil.payload;
    const { data } = yield api.post('auth/authenticate/admin', { email, password });

    const { token, user } = data;

    console.log(data);
    const userData = {
      name: user,
      token,
    };


    yield put(LoginActions.handleLoginSuccess());
    yield put(LoginActions.saveUserData(userData));


    yield window.localStorage.setItem('TOKEN_KEY', JSON.stringify(token));
    yield window.localStorage.setItem('USER_NAME', JSON.stringify(user));

    yield put(push('/main'));
  } catch (err) {
    const { data } = err.response;
    console.log(data);
    yield put(LoginActions.handleLoginError(data));
  }
}
