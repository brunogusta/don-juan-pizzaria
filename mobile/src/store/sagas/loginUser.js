/* eslint-disable no-underscore-dangle */
import { put } from 'redux-saga/effects';
import { AsyncStorage } from 'react-native';

import api from '../../services/api';
import { Creators as LoginActions } from '../ducks/userLogin';


export function* loginUserSaga(perfil) {
  try {
    const { email, password } = perfil.payload;

    const { data } = yield api.post('auth/authenticate', { email, password });

    yield put(LoginActions.handleLoginSuccess());
    const { token, user } = data;

    const TOKEN_KEY = token;

    const userData = {
      name: user.name,
      userID: user._id,
      userEmail: user.email,
    };

    yield AsyncStorage.setItem('token', TOKEN_KEY);

    yield put(LoginActions.saveUserData(userData));
  } catch (err) {
    const { data } = err.response;
    yield put(LoginActions.handleLoginError(data));
  }
}
