import { getNaklFiltered, getNaklData, editNakl, addNakl, getNaklHeaderData, updateNakl } from '../../helpers/nakladni';


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

  NAKL_HEADER_DATA_REQUEST: 'NAKL_HEADER_DATA_REQUEST',
  NAKL_HEADER_DATA_SUCCESS: 'NAKL_HEADER_DATA_SUCCESS',
  NAKL_HEADER_DATA_FAILURE: 'NAKL_HEADER_DATA_FAILURE',

  SHOW_ADD_MODAL: 'SHOW_ADD_MODAL',
  CLOSE_ADD_MODAL: 'CLOSE_ADD_MODAL',

  SHOW_EDIT_MODAL: 'SHOW_EDIT_MODAL',
  CLOSE_EDIT_MODAL: 'CLOSE_EDIT_MODAL',

  SHOW_BUTTONS_MODAL: 'SHOW_BUTTONS_MODAL',
  CLOSE_BUTTONS_MODAL: 'CLOSE_BUTTONS_MODAL',

  SET_NAKL_ID: 'SET_NAKL_ID',
  SET_NAKL_STATUS: 'SET_NAKL_STATUS',
  SET_ACCEPTANCE_TYPE: 'SET_ACCEPTANCE_TYPE',
};



export const getNakladniRequest = ({ year, month, status }) => {
  return dispatch => {
    dispatch(startNakladniRequest());

    getNaklFiltered(year, month, status)
      .then(res => {
        if (res.status === 200) {
          dispatch(getNakladniSuccess(res));
        } else {
          dispatch(getNakladniFailure(res));
        }
      })
  };
};

export const getNakladnaRequest = ({ id }) => {
  return dispatch => {
    dispatch(startNakladnaRequest());

    getNaklData(id)
      .then(res => {
        if (res.status === 200) {
          dispatch(getNakladnaSuccess(res));
        } else {
          dispatch(getNakladnaFailure(res));
        }
      });
  };
};


export const showModal = () => {
  return dispatch => {
    dispatch(showAddNaklModal());
  };
};

export const closeModal = () => {
  return dispatch => {
    dispatch(closeAddNaklModal());
  };
};


export const showEditNaklModal = () => {
  return dispatch => {
    dispatch(showEditModal());
  };
};

export const closeEditNaklModal = () => {
  return dispatch => {
    dispatch(closeEditModal());
  };
};


export const addOneNakl = () => {
  return dispatch => {
    addNakl();
  };
};

export const updateNaklData = (data) => {
  return dispatch => {
    updateNakl(data);
  };
};

export const getEditNaklData = (id) => {
  //console.log(id.naklId)
  return dispatch => {
    dispatch(startEditNaklDataRequest());

    editNakl(id.naklId)
      .then(res => {
        if (res.status === 200) {
          dispatch(getEditNaklDataSuccess(res));
        } else {
          dispatch(getEditNaklDataFailure(res));
        }
      });
  };
};

export const getNaklHeaderDataRequest = ({ id }) => {
  return dispatch => {
    dispatch(startNaklHeaderDataRequest());

    getNaklHeaderData(id)
      .then(res => {
        if (res.status === 200) {
          dispatch(getNaklHeaderDataSuccess(res));
        } else {
          dispatch(getNaklHeaderDataFailure(res));
        }
      });
  };
};

export const setNaklId = ({ id }) => {
  return setlId(id);
};

export const setNaklStatus = ({ status }) => {
  return setStatus(status);
};

export const setAcceptanceType = ({ type }) => {
  return setType(type);
};


export const showButtonsModal = () => {
  return dispatch => {
    dispatch(showButtonsPressModal());
  };
};

export const closeButtonsModal = () => {
  return dispatch => {
    dispatch(closeButtonsPressModal());
  };
};


const showButtonsPressModal = () => ({
  type: Types.SHOW_BUTTONS_MODAL
});

const closeButtonsPressModal = () => ({
  type: Types.CLOSE_BUTTONS_MODAL
});

const setlId = (payload) => ({
  type: Types.SET_NAKL_ID,
  payload
});

const setStatus = (payload) => ({
  type: Types.SET_NAKL_STATUS,
  payload
});

const setType = (payload) => ({
  type: Types.SET_ACCEPTANCE_TYPE,
  payload
});

const startNaklHeaderDataRequest = () => ({
  type: Types.NAKL_HEADER_DATA_REQUEST
});

const getNaklHeaderDataSuccess = (payload) => ({
  type: Types.NAKL_HEADER_DATA_SUCCESS,
  payload
});

const getNaklHeaderDataFailure = error => ({
  type: Types.NAKL_HEADER_DATA_FAILURE,
  payload: {
    error
  }
});

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


const showAddNaklModal = () => ({
  type: Types.SHOW_ADD_MODAL
});

const closeAddNaklModal = () => ({
  type: Types.CLOSE_ADD_MODAL
});


const showEditModal = () => ({
  type: Types.SHOW_EDIT_MODAL
});

const closeEditModal = () => ({
  type: Types.CLOSE_EDIT_MODAL
});




