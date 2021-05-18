import axios from 'axios';
import { get as getToken } from "../token";

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 10000,
})

console.log('process.env', process.env);
instance.interceptors.request.use((config) => {
  config.headers.key = getToken();
  return config;
});

export default instance;
