
export const Types = {
  LOGIN_REQUEST: 'LOGIN_REQUEST',
};



const loginRequest = (payload) => ({
  type: Types.LOGIN_REQUEST,
  payload
});



export default {
  loginRequest
};