import { getNaklFiltered, getNaklData } from '../../helpers/nakladni';


export const Types = {
  NAKLADNI_REQUEST: 'NAKLADNI_REQUEST',
  NAKLADNI_SUCCESS: 'NAKLADNI_SUCCESS',
  NAKLADNI_FAILURE: 'NAKLADNI_FAILURE',
  
  NAKLADNA_REQUEST: 'NAKLADNA_REQUEST',
  NAKLADNA_SUCCESS: 'NAKLADNA_SUCCESS',
  NAKLADNA_FAILURE: 'NAKLADNA_FAILURE',
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


export const getNakladnaRequest = () => {
  return dispatch => {

    dispatch(startNakladnaRequest());

    getNaklData()

      .then(res => {
        // console.log(res)
        if (res.status === 200) {
          dispatch(getNakladnaSuccess(res));

        } else {
          dispatch(getNakladnaFailure(res));
        }
      })
  };
};


const startNakladnaRequest = () => ({
  type: Types.NAKLADNA_REQUEST
});

const getNakladnaSuccess = (payload) => ({
  type: Types.NAKLADNA_SUCCESS,
  payload
});

const getNakladnaFailure = error => ({
  type: Types.NAKLADNA_FAILURE,
  payload: {
    error
  }
});



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




