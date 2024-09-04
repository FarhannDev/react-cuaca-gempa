import React, { useEffect, useState } from 'react';
import apiService from '../services/apiService';

const Home: React.FC = () => {
  const [quake, setQuake] = useState<Quake | undefined>();
  useState<WeatherProvince | null>(null);

  const [WeatherProvince, setWeatherProvince] = useState<
    WeatherProvince | undefined
  >();

  const fetchQuakeData = async () => {
    const quakeData: Quake | undefined = await apiService.getQuake();
    setQuake(quakeData);
  };

  const fetchWeatherProvince: (province: string) => Promise<void> = async (
    province: string
  ) => {
    const weatherProvinceData: WeatherProvince | undefined =
      await apiService.getWeatherByProvince(province);
    setWeatherProvince(weatherProvinceData);
  };

  useEffect(() => {
    fetchWeatherProvince('jawa-barat');
    fetchQuakeData();
  }, []);

  console.log(
    WeatherProvince?.areas.map((area) => console.log(area.description))
  );

  return <>{JSON.stringify(WeatherProvince)}</>;
};

export default Home;
