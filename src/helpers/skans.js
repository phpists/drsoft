import { axiosInstance } from './baseUrl';


export async function getSkans(id) {
  
  return await axiosInstance
    .get(`sgtins/${id}`)
    .then(response => {
      return response
    }).catch(error => ({ error }))
};

