import { put, takeLatest, call } from 'redux-saga/effects';
import {
  LOGIN_REQUEST,
} from './constants';
import { loginSuccess, loginFailure } from './actions';
import { loginApi } from '../../domain/api';

// Saga untuk menangani permintaan login
function* loginUser(action) {
  try {
    const response = yield call(loginApi);
    const userEmail = response.find((el) => el.email === action.payload.email && el.password === action.payload.password)
    if (!userEmail) {
      yield put(loginFailure("Email not found"))
    } else {
      localStorage.setItem("user", JSON.stringify(userEmail))
      yield put(loginSuccess(userEmail))
    }
  } catch (error) {
    yield put(loginFailure('An error occurred while logging in.'));
  }
}

export function* loginSaga() {
  yield takeLatest(LOGIN_REQUEST, loginUser);
}
