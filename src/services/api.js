import axios from 'axios';

export const api = axios.create({
  baseURL: "https://foodexplorerapi-8nzu.onrender.com",
  withCredentials: true   
});