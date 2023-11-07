import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from './constants';


export function loginRequest(payload) {
  return { type: LOGIN_REQUEST, payload };
}

export function loginSuccess(user) {
  return { type: LOGIN_SUCCESS, user };
}

export function loginFailure(error) {
  return { type: LOGIN_FAILURE, error };
}