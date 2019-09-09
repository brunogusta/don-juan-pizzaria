/* eslint-disable no-underscore-dangle */
import { put } from 'redux-saga/effects';


import api from '../../services/api';
import { Creators as LoginActions } from '../ducks/userLogin';


export function* loginUserSaga(perfil) {
  try {
    const { email, password } = perfil.payload;
    console.log(email);
    const { data } = yield api.post('auth/authenticate', { email, password });

    yield put(LoginActions.handleLoginSuccess());
    const { token, user } = data;

    const userData = {
      userID: user._id,
      userEmail: user.email,
      token,
    };
    yield put(LoginActions.saveUserData(userData));
    console.log(user);
  } catch (err) {
    const { data } = err.response;
    yield put(LoginActions.handleLoginError(data));
  }
}
