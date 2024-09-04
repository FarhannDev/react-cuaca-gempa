import React, { useEffect, useState } from 'react';
import Heading from '../components/shared/Heading';
import apiService from '../services/apiService';
import WeatherItemList from '../components/ui/weather/WeatherItemList';
import provinces from '../models/provincesModel';
import WeatherSelectedProvince from '../components/ui/weather/WeatherSelectedProvince';
import SearchEmpty from '../components/ui/search/SearchEmpty';

const Weather: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>('');
  const [items, setItems] = useState<WeatherProvince>();
  const [provinceOptions, setProvinceOptions] = useState<Provinces[]>(
    provinces.sort((a, b) => a.label.localeCompare(b.label))
  );
  const [selectedProvince, setSelectedProvince] = useState<Provinces | null>(
    null
  );

  const onSelectedChangeHandler = (selectedProvince: any) => {
    setSelectedProvince(selectedProvince);
  };

  useEffect(() => {
    async function getWeatherByProvinceData() {
      try {
        const selectProvinceName = selectedProvince?.value
          ? selectedProvince?.value
          : '';
        const data: WeatherProvince | undefined =
          await apiService.getWeatherByProvince(selectProvinceName);

        setTimeout(() => {
          setLoading(false);
          setItems(data);
        }, 1000);

        setItems(data);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }

    getWeatherByProvinceData();
  }, [selectedProvince]);

  return (
    <>
      <div className="weather-container">
        <Heading headingName="Perkiraan Cuaca Berdasarkan Provinsi" />
        <WeatherSelectedProvince
          placeholder="Pilih provinsi"
          options={provinceOptions}
          onSelectedChange={onSelectedChangeHandler}
        />
        {items ? (
          <WeatherItemList items={items} loading={loading} />
        ) : (
          <SearchEmpty text="Belum ada pencarian." />
        )}
      </div>
    </>
  );
};

export default Weather;
