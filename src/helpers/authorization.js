import { axiosInstance } from './baseUrl'


export function logIn() {
  return axiosInstance.put("users/enter?login=admin&password=pas")
    .then(response => {
      return response
    }).catch(error => ({ error }))
};


export function logOut() {
  return axiosInstance.put("users/exit")
    .then(response => {
      return response
    }).catch(error => ({ error }))
};


