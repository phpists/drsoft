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


export async function addNakl() {

  return await axiosInstance
    .get("nakls-full/-1")
    .then(response => {
      //console.log(response.data)
      return response
    }).catch(error => ({ error }))
};


