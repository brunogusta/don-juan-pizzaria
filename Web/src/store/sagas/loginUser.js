/* eslint-disable no-underscore-dangle */
import { put } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import api from '../../services/api';
import { Creators as LoginActions } from '../ducks/userLogin';


export function* loginUserSaga(perfil) {
  try {
    const { email, password } = perfil.payload;
    const { data } = yield api.post('auth/authenticate', { email, password });

    const { token, user } = data;

    const userData = {
      userID: user._id,
      userEmail: user.email,
      admin: user.admin,
      token,
    };


    yield put(LoginActions.handleLoginSuccess());
    yield put(LoginActions.saveUserData(userData));

    if (user.admin) {
      yield put(push('/main'));


      window.localStorage.setItem('adm', JSON.stringify(userData));
    } else {
      yield put(LoginActions.handleLoginError({ error: 'Usuário não é administrador' }));
    }
  } catch (err) {
    const { data } = err.response;
    console.log(data);
    yield put(LoginActions.handleLoginError(data));
  }
}
