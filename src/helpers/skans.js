import { axiosInstance } from './baseUrl'


export async function getSkans() {
  const config = {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'accessToken': "111111"
    }
  };

  return await axiosInstance
    .get(`sgtins/1`, config)
    .then(response => {
      return response.data
    }).catch(error => ({ error }))
};

