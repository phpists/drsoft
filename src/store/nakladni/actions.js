import { getNaklFiltered, getNaklData, editNakl, addNakl } from '../../helpers/nakladni';


export const Types = {
  NAKLADNI_REQUEST: 'NAKLADNI_REQUEST',
  NAKLADNI_SUCCESS: 'NAKLADNI_SUCCESS',
  NAKLADNI_FAILURE: 'NAKLADNI_FAILURE',

  NAKLADNA_REQUEST: 'NAKLADNA_REQUEST',
  NAKLADNA_SUCCESS: 'NAKLADNA_SUCCESS',
  NAKLADNA_FAILURE: 'NAKLADNA_FAILURE',

  EDIT_NAKL_REQUEST: 'EDIT_NAKL_REQUEST',
  EDIT_NAKL_SUCCESS: 'EDIT_NAKL_SUCCESS',
  EDIT_NAKL_FAILURE: 'EDIT_NAKL_FAILURE',

  SHOW_EDIT_MODAL: 'SHOW_EDIT_MODAL',
  CLOSE_EDIT_MODAL: 'CLOSE_EDIT_MODAL',
};


export const getNakladniRequest = ({ year, month, status }) => {
  return dispatch => {

    dispatch(startNakladniRequest());

    getNaklFiltered(year, month, status)

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

export const showModal = () => {
  return dispatch => {
    dispatch(showEditModal());
  }
};

export const closeModal = () => {
  return dispatch => {
    dispatch(closeEditModal());
  }
};

export const addOneNakl = () => {
  return dispatch => {
    addNakl();
  }
};

export const getEditNaklData = () => {
  return dispatch => {

    dispatch(startEditNaklDataRequest());

    editNakl()

      .then(res => {
        if (res.status === 200) {
          dispatch(getEditNaklDataSuccess(res));

        } else {
          dispatch(getEditNaklDataFailure(res));
        }
      })
  };
};


const startEditNaklDataRequest = () => ({
  type: Types.EDIT_NAKL_REQUEST
});

const getEditNaklDataSuccess = (payload) => ({
  type: Types.EDIT_NAKL_SUCCESS,
  payload
});

const getEditNaklDataFailure = error => ({
  type: Types.EDIT_NAKL_FAILURE,
  payload: {
    error
  }
});


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



const showEditModal = () => ({
  type: Types.SHOW_EDIT_MODAL
});

const closeEditModal = () => ({
  type: Types.CLOSE_EDIT_MODAL
});




