import { Types } from './actions';



const initialState = {
  nakladni: null,
  naklData: null,
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

    default: return state
  };
};


export default reducer;
