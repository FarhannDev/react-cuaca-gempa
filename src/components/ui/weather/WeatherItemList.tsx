/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import MyComponent from '../../MyComponent';

type IProps = { items: WeatherProvince; loading?: boolean };

const WeatherItemList: React.FC<IProps> = ({ items, loading }) =>
  loading ? (
    <div>Sedang memuat...</div>
  ) : (
    <div className="weather-item-list">
      {items?.areas
        .sort((a: any, b: any) => a.description.localeCompare(b.description))
        .map((area: any) => (
          <MyComponent.WeatherItem key={area.id} {...area} />
        ))}
    </div>
  );

export default WeatherItemList;
