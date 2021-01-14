import { getSkans } from '../../helpers/skans';


export const Types = {
  SKANS_REQUEST: 'SKANS_REQUEST',
  SKANS_SUCCESS: 'SKANS_SUCCESS',
  SKANS_FAILURE: 'SKANS_FAILURE',

  SET_ID_FOR_SKANS: 'SET_ID_FOR_SKANS',
};


export const getSkansRequest = (id) => {
  return dispatch => {
    dispatch(startSkansRequest());

    getSkans(id.idForSkans)
      .then(res => {
        if (res.status === 200) {
          dispatch(getSkansSuccess(res));

        } else {
          dispatch(getSkansFailure(res));
        }
      })
  };
};

export const setIdForSkans = ({ id }) => {
  return setlId(id);
};


const setlId = (payload) => ({
  type: Types.SET_ID_FOR_SKANS,
  payload
});


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


