import { Types } from './actions';



const initialState = {
  skans: null,
  loader: false,
  error: false,
  idForSkans:1
};


const reducer = (state = initialState, action) => {
  switch (action.type) {

    case Types.SKANS_REQUEST: {
      return {
        ...state,
        loader: true,
        skans: action.payload,
      }
    }
    case Types.SKANS_SUCCESS: {
      return {
        ...state,
        skans: action.payload.data,
        loader: false,
      }
    }
    case Types.SKANS_FAILURE: {
      return {
        ...state,
        error: action.payload,
        loader: false,
      }
    }


    case Types.SET_ID_FOR_SKANS: {
      return {
        ...state,
        idForSkans: action.payload
      }
    }

    default: return state
  };
};


export default reducer;
