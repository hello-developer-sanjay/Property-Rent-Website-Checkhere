import axios from 'axios';

const baseURL = 'http://localhost:5000/api'; // Specify your API base URL here

const api = axios.create({
  baseURL: baseURL,
});

export default api;
