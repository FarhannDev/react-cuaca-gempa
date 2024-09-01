import axios, { AxiosInstance } from 'axios';

const apiBaseUri: string = 'https://cuaca-gempa-rest-api.vercel.app';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: apiBaseUri,
  timeout: 1000,
  headers: { 'Content-Type': 'application/json' },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token') as string | null;
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
