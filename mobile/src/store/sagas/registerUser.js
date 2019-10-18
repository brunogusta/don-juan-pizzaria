import { put } from 'redux-saga/effects';

import api from '../../services/api';
import { Creators as RegisterActions } from '../ducks/userRegister';

export function* registerUserSaga(perfil) {
  try {
    const { email, password, name } = perfil.payload;

    yield api.post('auth/register', { email, password, name });

    yield put(RegisterActions.handleRegisterSuccess());
    yield put(RegisterActions.spin());
  } catch (err) {
    const { data } = err.response;

    yield put(RegisterActions.handleRegisterError(data));
    yield put(RegisterActions.spin());
  }
}
