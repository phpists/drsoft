import axios from 'axios';


const URL = 'http://79.164.176.102:12345/api/'


export const axiosInstance = axios.create({
  baseURL: URL,
});
