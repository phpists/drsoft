import { logIn, loginOut } from '../../helpers/authorization';

export const Types = {
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE',
  LOGIN_OUT: 'LOGIN_OUT',
  CONTINUE_AFTER_FAILURE: 'CONTINUE_AFTER_FAILURE'
};


export const loginRequest = ({ login, password }) => {
  return dispatch => {
    dispatch(startLogin());

    logIn(login, password)
      .then(res => {
        if (res.data && res.data.access_token) {
          localStorage.setItem('drSoftLogin', login);
          localStorage.setItem('drSoftToken', res.data.access_token);
          localStorage.setItem('drSoftUser', res.data.fio);
          dispatch(loginSuccess(res.data.fio));
        } else {
          dispatch(loginFailure(true))
        }
      });
  };
};


export const continueAfterError = () => {
  return dispatch => {
    dispatch(continueAfterFailure());
  };
};

export const logOut = () => {
  return dispatch => {
    loginOut();
    dispatch(loginOutRequest());
  };
};


const loginOutRequest = () => ({
  type: Types.LOGIN_OUT
});

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
