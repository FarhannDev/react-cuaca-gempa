import React from 'react';
import Select, { SingleValue } from 'react-select';
import Heading from '../../shared/Heading';
import customTheme from '../../../utils/customTheme';

interface WeatherSelectedProvince {
  provincesOptions: ProvinceOption[];
  selectedProvince: SingleValue<ProvinceOption>;
  onSelectedProvinceHandler: (newValue: SingleValue<ProvinceOption>) => void;
  placeholder?: string | 'Pilih Provinsi';
}

interface WeatherSelectedCities {
  citiesOptions: CityOption[];
  selectedCity: SingleValue<CityOption>;
  onSelectedCitiesHandler: (newValue: SingleValue<CityOption>) => void;
  placeholder?: string | 'Pilih Kota';
}

interface WeatherSubmit {
  onButtonSubmitHandler: () => void;
}

type WeatherSelectedProps = WeatherSelectedProvince &
  WeatherSelectedCities &
  WeatherSubmit;

const WeatherSelectedProvince: React.FC<WeatherSelectedProvince> = ({
  provincesOptions,
  selectedProvince,
  onSelectedProvinceHandler,
  placeholder,
}) => (
  <Select<ProvinceOption>
    options={provincesOptions}
    value={selectedProvince}
    onChange={onSelectedProvinceHandler}
    placeholder={placeholder}
    theme={customTheme}
    isClearable
    isSearchable
    autoFocus
  />
);

const WeatherSelectedCities: React.FC<WeatherSelectedCities> = ({
  citiesOptions,
  selectedCity,
  onSelectedCitiesHandler,
  placeholder,
}) => (
  <Select<CityOption>
    options={citiesOptions}
    value={selectedCity}
    onChange={onSelectedCitiesHandler}
    placeholder={placeholder}
    theme={customTheme}
    isClearable
    isSearchable
  />
);

const WeatherSelected: React.FC<WeatherSelectedProps> = ({
  provincesOptions,
  selectedProvince,
  onSelectedProvinceHandler,
  citiesOptions,
  selectedCity,
  onSelectedCitiesHandler,
  onButtonSubmitHandler,
}) => {
  return (
    <>
      <div className="wf-forminput-container">
        <div className="wf-forminput__heading">
          <Heading headingName="Pilih Berdasarkan Provinsi & Kota" />
          <hr className="text-secondary" />
        </div>

        <div className="wf-forminput__select">
          <WeatherSelectedProvince
            provincesOptions={provincesOptions}
            selectedProvince={selectedProvince}
            onSelectedProvinceHandler={onSelectedProvinceHandler}
            placeholder="Pilih Provinsi"
          />

          <WeatherSelectedCities
            citiesOptions={citiesOptions}
            selectedCity={selectedCity}
            onSelectedCitiesHandler={onSelectedCitiesHandler}
            placeholder="Pilih Kota Atau Kabupaten"
          />

          <div className="wf-forminput__select-action">
            <button
              onClick={onButtonSubmitHandler}
              type="button"
              className="bn632-hover bn28"
            >
              Telusuri
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherSelected;
