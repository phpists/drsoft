import { axiosInstance } from './baseUrl'


export async function getNaklFiltered(year, month) {
  return await axiosInstance
    .get(`nakls/filtr?address_id=1&year=${year}&month=${month}&status_id=1`)
    //.get(`nakls/filtr`, {data: null}, { params: { year, month } })
    .then(response => {
      return response
    })
    .catch((error) => ({ error }))
};


export async function getNakl(data) {
  const config = {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'accessToken': "111111"
    }
  };
  const formData = new FormData();
  formData.append(1);

  return await axiosInstance
    //.get("nakls, formData, config)
    .get("nakls/1", config)
    .then(response => {
      return response
    }).catch(error => ({ error }))
};


export async function addNakl(data) {
  const config = {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'accessToken': "111111"
    }
  };
  const formData = new FormData();
  formData.append("subject_id", 1)
  formData.append("shipper_id", 2)
  formData.append("operation_date", "12.12.2020")
  formData.append("doc_num", "2929929992")
  formData.append("doc_date", "12.12.2020")
  formData.append("receive_type", 1)
  formData.append("source", 1)
  formData.append("contract_type", 1)
  formData.append("contract_num", "s99939923")

  return await axiosInstance
    .post("nakls-full", formData, config)
    .then(response => {
      return response
    }).catch(error => ({ error }))
};

