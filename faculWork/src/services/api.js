import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // URL base da sua API
});

export default api;
