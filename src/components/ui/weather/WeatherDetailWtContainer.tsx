import * as React from 'react';
import IconCerahBerawan from '/icons/cloudy.png';
import IconMatahari from '/icons/sun.png';
import IconHujan from '/icons/rain.png';

type IProps = { weather: WeatherCity | undefined };

type WeatherDetailWtItemProps = {
  type?: string;
  h?: string;
  datetime?: string;
  code?: string;
  name?: string;
};

const WeatherDetailWtItem: React.FC<WeatherDetailWtItemProps> = ({
  name,
  code,
}) => {
  let iconCuaca;

  switch (true) {
    case code === '1':
      iconCuaca = IconCerahBerawan;
      break;
    case code === '3':
      iconCuaca = IconHujan;
      break;
    default:
      iconCuaca = IconMatahari;
      break;
  }

  return (
    <div className="weather-detail-wt__item">
      <img
        src={iconCuaca}
        alt={name}
        loading="lazy"
        className="weather-detail-wt__item-icon"
      />

      <div className="weather-detail-wt__item-status">{name}</div>
    </div>
  );
};

const WeatherDetailWtContainer: React.FC<IProps> = ({ weather }) => {
  const items = weather?.params?.find((weather) => weather.id === 'weather');

  return (
    <>
      <div className="weather-detail-wt">
        <div className="weather-detail-wt__itemlist">
          {items?.times.map((time, index) => (
            <WeatherDetailWtItem key={+index} {...time} />
          ))}
        </div>
      </div>
    </>
  );
};

export default WeatherDetailWtContainer;
