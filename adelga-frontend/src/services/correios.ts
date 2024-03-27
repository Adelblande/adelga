import axios from 'axios';

const correios = axios.create({
  baseURL: '/api',
});

export default correios;
