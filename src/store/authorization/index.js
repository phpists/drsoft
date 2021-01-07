import { Types } from './actions'

// const initialState = {
//   authData: sessionStorage.getItem('drSoftAuth') ? JSON.parse(sessionStorage.getItem('drSoftAuth')) : null,
// };

const initialState = {
  authData: null
};


const reducer = (state = initialState, action) => {

  switch (action.type) {

    case Types.LOGIN_REQUEST: {
      return {
        ...state,
        authData: action.payload,
      }
    }
    // case Types.LOGIN_SUCCESS: {
    //   return {
    //     ...state, ...{
    //       authData: action.payload,
    //     }
    //   }
    // }
    // case Types.LOG_OUT: {
    //   return {
    //     ...state, ...{
    //       authData: null,
    //     }
    //   }
    // }
    default: return state
  }
};


export default reducer;
