import { axiosInstance } from './baseUrl'


//const axios = require('axios');

export function getToken() {
  return axiosInstance.put("Users/Enter?login=admin&password=pas")
    .then(response => {
      console.log("token: ", response.data)
      return response
    }).catch(error => ({ error }))
};


export function getInfo() {
  const config = {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'accessToken': "17a83423-3e61-4199-a727-26b2884823f4"
    }
  };
  // const jsonData = JSON.stringify(data);
  // const formData = new FormData();
  // formData.append('jsonData', jsonData)

  // return axios.get("http://79.164.176.102:12345/api/Users/Enter?login=admin&password=pas", config)
  //   .then(response => {
  //     console.log(response)
  //     return response
  //   }).catch(error => ({ error }))

  return axiosInstance.get("company/self", config)
    .then(response => {
      console.log(response)
      return response
    }).catch(error => ({ error }))
}

//const base = " http://79.164.176.102:12345"