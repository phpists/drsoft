import { axiosInstance } from './baseUrl';



export async function getNaklFiltered(year, month, status) {
  return await axiosInstance
    .get(`nakls/filtr?company_id=1&year=${year}&month=${month}&status_id=${status}`)
    //.get(`nakls/filtr`, {data: null}, { params: { year, month } })
    .then(response => {
      return response
    })
    .catch((error) => ({ error }))
};

export async function editNakl() {
  return await axiosInstance
    .get("nakls-full/-1")
    .then(response => {
      return response
    }).catch(error => ({ error }))
};

export async function addNakl() {
  return await axiosInstance
    .post("nakls-full?provider_id=1&operation_date=2021-01-01T00:00:00&doc_date=2021-01-01T00:00:00&doc_num=9s9d9ss&receive_type_id=0&source_type_id=0&contract_type_id=2&contract_num=9sdls99")
    .then(response => {
      return response
    }).catch(error => ({ error }))
};

export async function getNaklData(id) {
  return await axiosInstance
    .get(`nakl-items/${id}`)
    .then(response => {
      return response
    }).catch(error => ({ error }))
};

export async function getNaklHeaderData(id) {
  return await axiosInstance
    .get(`nakls/${id}`)
    .then(response => {
      return response
    }).catch(error => ({ error }))
};


export async function naklTrustAccept(id) {
  return await axiosInstance
    .put(`nakls/trust-accept/${id}`)
    .then(response => {
      return response
    }).catch(error => ({ error }))
};

export async function naklSignAndSend(id) {
  return await axiosInstance
    .put(`nakls/sign-and-send/${id}`)
    .then(response => {
      return response
    }).catch(error => ({ error }))
};