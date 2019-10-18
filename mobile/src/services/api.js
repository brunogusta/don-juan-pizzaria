import axios from 'axios';
import { getToken } from './auth';


const api = axios.create({
  baseURL: 'http://10.10.10.6:3002/',
});

export const uri = 'http://10.10.10.6:3002/';

api.interceptors.request.use(async (config) => {
  const token = await getToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});


export default api;
