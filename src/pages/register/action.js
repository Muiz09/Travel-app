import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
} from './constants';

export function registerRequest(payload) {
  return { type: REGISTER_REQUEST, payload };
}

export function registerSuccess(data) {
  return { type: REGISTER_SUCCESS, data };
}

export function registerFailure(error) {
  return { type: REGISTER_FAILURE, error };
}