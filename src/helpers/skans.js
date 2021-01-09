import { axiosInstance } from './baseUrl'


export async function getSkans() {
 
  return await axiosInstance
    .get(`sgtins/1`)
    .then(response => {
      //console.log(response)
      return response
    }).catch(error => ({ error }))
};

