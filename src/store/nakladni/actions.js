import { getNaklFiltered } from '../../helpers/nakladni';


export const Types = {
  NAKLADNI_REQUEST: 'NAKLADNI_REQUEST',
  NAKLADNI_SUCCESS: 'NAKLADNI_SUCCESS',
  NAKLADNI_FAILURE: 'NAKLADNI_FAILURE',
};


export const getNakladniRequest = ({ year, month }) => {
  return dispatch => {

    dispatch(startNakladniRequest());

    getNaklFiltered(year, month)

      .then(res => {
       // console.log(res)
        if (res.status === 200) {
          dispatch(getNakladniSuccess(res));

        } else {
          dispatch(getNakladniFailure(res));
        }
      })
  };
};


const startNakladniRequest = () => ({
  type: Types.NAKLADNI_REQUEST
});

const getNakladniSuccess = (payload) => ({
  type: Types.NAKLADNI_SUCCESS,
  payload
});

const getNakladniFailure = error => ({
  type: Types.NAKLADNI_FAILURE,
  payload: {
    error
  }
});


