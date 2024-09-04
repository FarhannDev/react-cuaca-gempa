import React from 'react';
import WeatherItem from './WeatherItem';

type IProps = { items: WeatherProvince; loading?: boolean };

const WeatherItemList: React.FC<IProps> = ({ items, loading }) =>
  loading ? (
    <div>Sedang memuat...</div>
  ) : (
    <div className="weather-item-list">
      {items?.areas.map((area) => (
        <WeatherItem key={area.id} {...area} />
      ))}
    </div>
  );

export default WeatherItemList;
