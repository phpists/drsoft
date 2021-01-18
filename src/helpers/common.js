import { axiosInstance } from './baseUrl';


export async function getProviders() {
  return await axiosInstance
    .get(`companies`)
    .then(response => {
      //console.log(response.data)
      return response
    }).catch(error => ({ error }))
};

export async function getSourceTypes() {
  return await axiosInstance
    .get(`reference-books/source-types`)
    .then(response => {
      //console.log(response.data)
      return response
    }).catch(error => ({ error }))
};

export async function getTurnoverTypes() {
  return await axiosInstance
    .get(`reference-books/turnover-types`)
    .then(response => {
      //console.log(response.data)
      return response
    }).catch(error => ({ error }))
};

export async function getContractTypes() {
  return await axiosInstance
    .get(`reference-books/contract-types`)
    .then(response => {
      //console.log(response.data)
      return response
    }).catch(error => ({ error }))
};


