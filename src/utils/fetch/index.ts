import axios from 'axios';
import { get as getToken } from "../token";

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 10000,
})

instance.interceptors.request.use((config) => {
  config.headers.key = getToken();
  return config;
});

export default instance;
