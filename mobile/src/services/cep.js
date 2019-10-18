import axios from 'axios';


const cepApi = axios.create({
  baseURL: 'http://viacep.com.br/ws/',
});

// http://apps.widenet.com.br/busca-cep/api/cep/
export default cepApi;
