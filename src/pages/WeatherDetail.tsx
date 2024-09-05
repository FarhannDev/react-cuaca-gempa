import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import apiService from '../services/apiService';
import Heading from '../components/shared/Heading';
import WeatherDetailWtContainer from '../components/ui/weather/WeatherDetailWtContainer';

const WeatherDetail: React.FC = () => {
  const { prov, city } = useParams<{ prov: string; city: string }>();
  const [weatherCityData, setWeatherCityData] = useState<WeatherCity>();

  useEffect(() => {
    async function getWeatherCityData() {
      if (prov && city) {
        const data = await apiService.getWeatherByCity(prov, city);
        setWeatherCityData(data);
      }
    }

    getWeatherCityData();
  }, [city, prov]);

  return (
    <div className="weather-detail-container">
      <Heading
        headingName={`Perkiraan cuaca di kota ${weatherCityData?.description}, ${weatherCityData?.domain}`}
      />
      <hr className="text-secondary" />

      <WeatherDetailWtContainer weather={weatherCityData} />

      <div className="weather-detail-temparature"></div>
    </div>
  );
};

export default WeatherDetail;
