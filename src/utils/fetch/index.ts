import axios from 'axios';
import { get as getToken } from "../token";

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 2000,
})

instance.interceptors.request.use((config) => {
  config.headers.Authorization = getToken();
  return config;
});

export default instance;
