import { Types } from './actions';



const initialState = {
  nakladni: null,
  naklData: null,
  addNaklModal: false,
  editNaklModal: false,
  buttonsModal: false,
  editNaklData: null,
  naklId: 1,
  naklHeaderData: null,
  loader: false,
  error: false
};


const reducer = (state = initialState, action) => {

  switch (action.type) {
    case Types.NAKLADNI_REQUEST: {
      return {
        ...state,
        loader: true,
        nakladni: action.payload,
      }
    }
    case Types.NAKLADNI_SUCCESS: {
      return {
        ...state,
        nakladni: action.payload.data,
        loader: false,
      }
    }
    case Types.NAKLADNI_FAILURE: {
      return {
        ...state,
        error: action.payload,
        loader: false,
      }
    }


    case Types.NAKLADNA_REQUEST: {
      return {
        ...state,
        loader: true,
        naklData: action.payload,
      }
    }
    case Types.NAKLADNA_SUCCESS: {
      return {
        ...state,
        naklData: action.payload.data,
        loader: false,
      }
    }
    case Types.NAKLADNA_FAILURE: {
      return {
        ...state,
        error: action.payload,
        loader: false,
      }
    }


    case Types.NAKL_HEADER_DATA_REQUEST: {
      return {
        ...state,
        loader: true,
        naklHeaderData: action.payload,
      }
    }
    case Types.NAKL_HEADER_DATA_SUCCESS: {
      return {
        ...state,
        naklHeaderData: action.payload.data,
        loader: false,
      }
    }
    case Types.NAKL_HEADER_DATA_FAILURE: {
      return {
        ...state,
        error: action.payload,
        loader: false,
      }
    }


    case Types.EDIT_NAKL_REQUEST: {
      return {
        ...state,
        loader: true,
        editNaklData: action.payload,
      }
    }
    case Types.EDIT_NAKL_SUCCESS: {
      return {
        ...state,
        editNaklData: action.payload.data,
        loader: false,
      }
    }
    case Types.EDIT_NAKL_FAILURE: {
      return {
        ...state,
        error: action.payload,
        loader: false,
      }
    }


    case Types.SET_NAKL_ID: {
      return {
        ...state,
        naklId: action.payload
      }
    }


    case Types.SHOW_ADD_MODAL: {
      return {
        ...state,
        addNaklModal: true
      }
    }
    case Types.CLOSE_ADD_MODAL: {
      return {
        ...state,
        addNaklModal: false
      }
    }


    case Types.SHOW_EDIT_MODAL: {
      return {
        ...state,
        editNaklModal: true
      }
    }
    case Types.CLOSE_EDIT_MODAL: {
      return {
        ...state,
        editNaklModal: false
      }
    }


    case Types.SHOW_BUTTONS_MODAL: {
      return {
        ...state,
        buttonsModal: true
      }
    }
    case Types.CLOSE_BUTTONS_MODAL: {
      return {
        ...state,
        buttonsModal: false
      }
    }

    default: return state
  };
};


export default reducer;
