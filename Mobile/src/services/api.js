import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.10.10.4:3002/',
});

export default api;
