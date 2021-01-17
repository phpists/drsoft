import { axiosInstance } from './baseUrl';


export async function getCompanies() {
  return await axiosInstance
    .get(`companies`)
    .then(response => {
      //console.log(response.data)
      return response
    }).catch(error => ({ error }))
};


// export async function deleteSkans(id) {
//   return await axiosInstance
//     .delete(`sgtins/${id}`)
//     .then(response => {
//       return response
//     }).catch(error => ({ error }))
// };

