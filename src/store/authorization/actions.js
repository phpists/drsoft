import { logIn } from '../../helpers/authorization';


export const Types = {
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE',
  CONTINUE_AFTER_FAILURE: 'CONTINUE_AFTER_FAILURE'
};


export const loginRequest = ({ login, password }) => {
  return dispatch => {
    dispatch(startLogin());
    logIn(login, password)
      .then(res => {
        if (res.is_error) {
          dispatch(loginFailure(true))
        } else {
          sessionStorage.setItem('drSoftToken', res.data.access_token);
          dispatch(loginSuccess(res));
        }
      });
  };
};


export const continueAfterError = () => {
  return dispatch => {
    dispatch(continueAfterFailure());
  };
};


const startLogin = () => ({
  type: Types.LOGIN_REQUEST
});

const loginSuccess = (payload) => ({
  type: Types.LOGIN_SUCCESS,
  payload
});

const continueAfterFailure = () => ({
  type: Types.CONTINUE_AFTER_FAILURE,
});

const loginFailure = error => ({
  type: Types.LOGIN_FAILURE,
  payload: {
    error
  }
});
