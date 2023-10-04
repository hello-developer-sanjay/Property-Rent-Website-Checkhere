import axios from 'axios';

const baseURL = 'https://house-cq32.onrender.com/api'; // Specify your API base URL here

const api = axios.create({
  baseURL: baseURL,
});

export default api;
