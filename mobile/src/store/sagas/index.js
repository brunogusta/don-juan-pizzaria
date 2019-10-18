import { all, takeLatest } from 'redux-saga/effects';

import { registerUserSaga } from './registerUser';
import { loginUserSaga } from './loginUser';


import { Types as registerTypes } from '../ducks/userRegister';
import { Types as loginTypes } from '../ducks/userLogin';


export default function* rootSaga() {
  yield all(
    [
      takeLatest(registerTypes.REGISTER_REQUEST, registerUserSaga),
      takeLatest(loginTypes.LOGIN_REQUEST, loginUserSaga),
    ],
  );
}
