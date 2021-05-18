import axios from 'axios';
import { get as getToken } from "../token";
import { API_BASE_URL } from "../../config/constants";

const instance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
})

instance.interceptors.request.use((config) => {
  config.headers.key = getToken();
  return config;
});

export default instance;
