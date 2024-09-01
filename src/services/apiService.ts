import axios, { AxiosResponse } from 'axios';
import axiosInstance from '../config/axios';

const apiService = (() => {
  async function getQuake(): Promise<Quake | undefined> {
    try {
      const response: AxiosResponse<ResponseData> = await axiosInstance.get(
        '/quake'
      );
      const responseData: ResponseData = response.data;
      const { data } = responseData;
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          console.error('Response error:', error.response.data);
          console.error('Status code:', error.response.status);
          console.error('Headers:', error.response.headers);
        } else if (error.request) {
          console.error('No response received:', error.request);
        } else {
          console.error('Error setting up request:', error.message);
        }
      } else {
        console.error('Unexpected error:', error);
      }
    }
  }

  async function getWeatherByProvince(
    province: string
  ): Promise<WeatherProvince | undefined> {
    try {
      const response: AxiosResponse<ResponseData, WeatherProvince> =
        await axiosInstance.get(`/weather/${province}`);

      const responseData: ResponseData = response.data;
      const { data } = responseData;
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          console.error('Response error:', error.response.data);
          console.error('Status code:', error.response.status);
          console.error('Headers:', error.response.headers);
        } else if (error.request) {
          console.error('No response received:', error.request);
        } else {
          console.error('Error setting up request:', error.message);
        }
      } else {
        console.error('Unexpected error:', error);
      }
    }
  }
  async function getWeatherByCity(
    province: string,
    city: string
  ): Promise<WeatherCity | undefined> {
    try {
      const response: AxiosResponse<ResponseData, WeatherProvince> =
        await axiosInstance.get(`/weather/${province}/${city}`);
      const responseData: ResponseData = response.data;
      const { data } = responseData;

      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          console.error('Response error:', error.response.data);
          console.error('Status code:', error.response.status);
          console.error('Headers:', error.response.headers);
        } else if (error.request) {
          console.error('No response received:', error.request);
        } else {
          console.error('Error setting up request:', error.message);
        }
      } else {
        console.error('Unexpected error:', error);
      }
    }
  }

  return { getQuake, getWeatherByProvince, getWeatherByCity };
})();

export default apiService;
