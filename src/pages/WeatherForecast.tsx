/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SingleValue } from 'react-select';
import Swal from 'sweetalert2';
import provinces from '../models/provincesModel';
import apiService from '../services/apiService';
import formatString from '../utils/formatString';
import MyComponent from '../components/MyComponent';

const WeatherForecast: React.FC = () => {
  const [provincesOptions] = useState<ProvinceOption[]>(() => {
    return provinces.sort((a, b) => a.label.localeCompare(b.label));
  });
  const [citiesOptions, setCitiesOptions] = useState<CityOption[]>([]);
  const [selectedProvince, setSelectedProvince] =
    useState<SingleValue<ProvinceOption>>(null);
  const [selectedCity, setSelectedCity] =
    useState<SingleValue<CityOption>>(null);

  const [, setSearchParams] = useSearchParams();
  // const [keyword, setKeyword] = useState(
  //   () => searchParams.get('_prov') || searchParams.get('_city') || ''
  // );
  const [datas, setDatas] = useState<WeatherCity | undefined>();
  const [textHeading, setTextHeading] = useState<string>('');

  const onSelectedProvinceHandler = (
    selectedOption: SingleValue<ProvinceOption>
  ) => {
    setSelectedProvince(selectedOption);
    setSelectedCity(null);
  };

  const onSelectedCitiesHandler = (selectedOption: SingleValue<CityOption>) => {
    setSelectedCity(selectedOption);
  };

  useEffect(() => {
    async function getWeatherByProvinceData() {
      if (selectedProvince) {
        const data: WeatherProvince | undefined =
          await apiService.getWeatherByProvince(
            selectedProvince ? selectedProvince.value : ''
          );

        const result = data?.areas.map((area: any) => {
          return {
            value: formatString(area.description),
            label: area.description,
            province: formatString(area.domain),
          };
        });

        if (result) {
          const citiesSort = result?.sort((a: any, b: any) =>
            a.label.localeCompare(b.label)
          );

          setCitiesOptions(citiesSort);
        }
      }
    }

    getWeatherByProvinceData();
  }, [selectedProvince, selectedCity]);

  const onButtonSubmitHandler = () => {
    if (selectedProvince && selectedCity) {
      setSearchParams({
        _prov: selectedProvince.value,
        _city: selectedCity.value,
      });
      setTextHeading(
        `Menelusuri  ${selectedCity.label}, ${selectedProvince.label}`
      );
      const getWeatherByCityData = async () => {
        if (selectedProvince && selectedCity) {
          const provinces: string = selectedProvince?.value;
          const cities: string = selectedCity?.value;
          const data: WeatherCity | undefined =
            await apiService.getWeatherByCity(provinces, cities);

          setDatas(data);
        }
      };

      return getWeatherByCityData();
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Gagal!',
        text: 'Silakan pilih provinsi dan kota!',
      });
    }
  };

  const weatherData = datas?.params.find(
    (weather: { id: string }) => weather.id === 'weather'
  );
  const tempData = datas?.params.find(
    (temp: { id: string }) => temp.id === 't'
  );
  const mergedData = weatherData?.times.map(
    (weather: { h: any; datetime: any; code: any; name: any }) => {
      const matchingTemp = tempData?.times.find(
        (temp: { h: any }) => temp.h === weather.h
      );

      return {
        h: weather?.h,
        datetime: weather?.datetime,
        weatherCode: weather?.code,
        weatherName: weather?.name,
        temperatureCelcius: matchingTemp?.celcius,
        temperatureFahrenheit: matchingTemp?.fahrenheit,
      };
    }
  );

  const [quakeData, setQuakeData] = useState<Quake | undefined>();

  useEffect(() => {
    async function getQuakeData() {
      const response = await apiService.getQuake();
      setQuakeData(response);
    }

    getQuakeData();
  }, []);

  return (
    <>
      <div className="wf-container pb-5">
        <MyComponent.WeatherSelected
          provincesOptions={provincesOptions}
          selectedProvince={selectedProvince}
          citiesOptions={citiesOptions}
          selectedCity={selectedCity}
          onSelectedProvinceHandler={onSelectedProvinceHandler}
          onSelectedCitiesHandler={onSelectedCitiesHandler}
          onButtonSubmitHandler={onButtonSubmitHandler}
        />

        {!datas && (
          <div className="py-3 wf-search-container">
            <MyComponent.SearchEmpty text="Belum ada pencarian." />{' '}
          </div>
        )}

        {datas && (
          <>
            <div className="wf-content">
              <div className="wf-content__heading pt-5">
                <MyComponent.Heading headingName={textHeading} />
              </div>

              <div className="wf-content__quake">
                <div className="wf-content__quake-heading">
                  INFO GEMPA TERKINI <hr className="text-secondary" />
                </div>

                <MyComponent.QuakeItemList quake={quakeData} />
              </div>

              <div className="wf-content__weather pb-3">
                <MyComponent.WeatherDetailWtContainer weathers={mergedData} />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default WeatherForecast;
