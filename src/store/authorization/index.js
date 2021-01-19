import { Types } from './actions';



const initialState = {
  token: localStorage.getItem('drSoftToken') || null,
  user: localStorage.getItem('drSoftUser') || null,
  loader: false,
  error: false
};



const reducer = (state = initialState, action) => {

  switch (action.type) {

    case Types.LOGIN_REQUEST: {
      return {
        ...state,
        user: action.payload,
        loader: true,
      }
    }

    case Types.LOGIN_SUCCESS: {
      return {
        ...state,
        user: action.payload,
        loader: false,
        token: localStorage.getItem('drSoftToken') || null,
      }
    }

    case Types.LOGIN_FAILURE: {
      return {
        ...state,
        error: action.payload,
        loader: false,
      }
    }

    case Types.CONTINUE_AFTER_FAILURE: {
      return {
        ...state,
        error: false,
      }
    }

    case Types.LOGIN_OUT: {
      return {
        ...state,
        token: null,
        user: null
      }
    }

    default: return state
  };
};


export default reducer;
