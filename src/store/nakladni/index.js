import { Types } from './actions';



const initialState = {
  nakladni: null,
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

    default: return state
  };
};


export default reducer;
