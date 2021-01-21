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

export async function editNakl(id) {
  return await axiosInstance
    //.get("nakls-full/-1")
    .get(`nakls-full/-${id}`)
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

export async function updateNakl(data) {
  const { nakl_id, provider_id, operation_date, doc_date, doc_num, receive_type_id, source_type_id, contract_type_id, contract_num } = data;
  // console.log(data.nakl_id)
  // console.log(data.provider_id)
  // console.log(data.operation_date)
  // console.log(data.doc_date)
  // console.log(data.doc_num)
  // console.log(data.receive_type_id)
  // console.log(data.source_type_id)
  // console.log(data.contract_type_id)

  return await axiosInstance
    .put(`nakls-full/${nakl_id}?provider_id=${provider_id}&operation_date=${operation_date}&doc_date=${doc_date}&doc_num=${doc_num}&receive_type_id=${receive_type_id}&source_type_id=${source_type_id}&contract_type_id=${contract_type_id}&contract_num=${contract_num}`)
    .then(response => {
      return response
    }).catch(error => ({ error }))
};