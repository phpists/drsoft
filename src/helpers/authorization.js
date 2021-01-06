import { axiosInstance } from './baseUrl'



export async function logIn(login, password) {
  
  return await axiosInstance
  .put(`users/enter?login=${login}&password=${password}`)
    .then(response => {
      return response.data
    }).catch(error => ({ error }))
};




export function logOut() {
  return axiosInstance.put("users/exit")
    .then(response => {
      return response
    }).catch(error => ({ error }))
};


