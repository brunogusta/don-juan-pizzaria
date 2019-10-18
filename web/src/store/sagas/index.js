import { all, takeLatest } from 'redux-saga/effects';

import { loginUserSaga } from './loginUser';


import { Types as loginTypes } from '../ducks/userLogin';


export default function* rootSaga() {
  yield all(
    [
      takeLatest(loginTypes.LOGIN_REQUEST, loginUserSaga),
    ],
  );
}
