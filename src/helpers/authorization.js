import { axiosInstance } from './baseUrl'


//const axios = require('axios');

export function getToken(data) {
  const config = {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': "*"
    }
  };
  const jsonData = JSON.stringify();
  const formData = new FormData();
  formData.append('jsonData', jsonData)

  // return axios.get("http://79.164.176.102:12345/api/Users/Enter?login=admin&password=pas", config)
  //   .then(response => {
  //     console.log(response)
  //     return response
  //   }).catch(error => ({ error }))

  return axiosInstance.get("Users/Enter?login=admin&password=pas", formData, config)
    .then(response => {
      console.log(response)
      return response
    }).catch(error => ({ error }))
}


export function getInfo(data) {
  const config = {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'accessToken': "fccda699-f604-4d11-8f0b-e242ddc754ba"
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