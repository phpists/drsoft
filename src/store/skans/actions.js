import { getSkans } from '../../helpers/skans';


export const Types = {
  SKANS_REQUEST: 'SKANS_REQUEST',
  SKANS_SUCCESS: 'SKANS_SUCCESS',
  SKANS_FAILURE: 'SKANS_FAILURE',
};


export const getSkansRequest = () => {
  return dispatch => {

    dispatch(startSkansRequest());

    getSkans()

      .then(res => {
         if (res.status === 200) {
        dispatch(getSkansSuccess(res));

        } else {
          dispatch(getSkansFailure(res));
        }
      })
  };
};


const startSkansRequest = () => ({
  type: Types.SKANS_REQUEST
});

const getSkansSuccess = (payload) => ({
  type: Types.SKANS_SUCCESS,
  payload
});

const getSkansFailure = error => ({
  type: Types.SKANS_FAILURE,
  payload: {
    error
  }
});


