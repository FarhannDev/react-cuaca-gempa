import axios, { AxiosResponse } from 'axios';

const apiService = (() => {
  const apiBaseUrl = 'https://cuaca-gempa-rest-api.vercel.app';

  async function getQuake(): Promise<Quake | undefined> {
    try {
      const response: AxiosResponse = await axios.get(`${apiBaseUrl}/quake`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        timeout: 3000,
      });

      const quakeData: Quake = await response.data.data;
      return quakeData;
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
      const response: AxiosResponse = await axios.get(
        `${apiBaseUrl}/weather/${province}`,
        {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
          timeout: 3000,
        }
      );

      const weatherProvince: WeatherProvince = await response.data.data;
      return weatherProvince;
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
      const response: AxiosResponse = await axios.get(
        `${apiBaseUrl}/weather/${province}/${city}`,
        {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
          timeout: 3000,
        }
      );

      const weatherCity: WeatherCity = await response.data.data;
      return weatherCity;
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
