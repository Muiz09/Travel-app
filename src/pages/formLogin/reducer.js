import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from './constants';

const initialState = {
  user: null, 
  loading: false, 
  error: null, 
};

export function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.user, 
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error, 
      };
    default:
      return state;
  }
}