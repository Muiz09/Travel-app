import { call, put, takeLatest } from 'redux-saga/effects';
import { REGISTER_REQUEST } from './constants';
import { registerApi } from '../../domain/api'; 
import { registerSuccess, registerFailure } from './action';

export function* doRegister(action) {
    try {
        const { fullname, email, password } = action.payload;
        const response = yield call(registerApi, fullname, email, password);

        if (response) {
            yield put(registerSuccess(response));
        } else {
            yield put(registerFailure("Registration failed"));
        }
    } catch (error) {
        yield put(registerFailure("An error occurred"));
    }
}

export default function* registerSaga() {
    yield takeLatest(REGISTER_REQUEST, doRegister);
}