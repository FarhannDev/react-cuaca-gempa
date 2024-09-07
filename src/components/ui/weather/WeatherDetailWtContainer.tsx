import * as React from 'react';
import IconCuacaCerahBerawan from '/icons/cuaca_cerah_berawan.png';
import IconCuacaCerah from '/icons/cuaca_cerah.png';
// import IconCuacaHujan from '/icons/cuaca_hujan.png';
import IconCuacaBerawan from '/icons/cuaca_berawan.png';
import {
  formatDateWithDayAndMonth,
  parseDateTime,
} from '../../../utils/formatDatetime';

type WeatherDetailWtItemProps = {
  h?: string;
  type?: string;
  datetime?: string;
  weatherCode?: string;
  weatherName?: string;
  temperatureCelcius?: string;
  temperatureFahrenheit?: string;
};

type WeatherDataProps = { weathers: WeatherDetailWtItemProps[] | undefined };

const WeatherDetailWtItem: React.FC<WeatherDetailWtItemProps> = ({
  weatherName,
  weatherCode,
  temperatureCelcius,
  temperatureFahrenheit,
  datetime,
}) => {
  let iconCuaca;

  switch (true) {
    case weatherCode === '1':
      iconCuaca = IconCuacaCerahBerawan;
      break;
    case weatherCode === '3':
      iconCuaca = IconCuacaBerawan;
      break;
    default:
      iconCuaca = IconCuacaCerah;
      break;
  }

  const datetimeString = datetime ? datetime : '';
  const date = parseDateTime(datetimeString);
  const formattedDate = formatDateWithDayAndMonth(date);

  return (
    <div className="weather-detail-wt__item">
      <img
        src={iconCuaca}
        alt={weatherName}
        loading="lazy"
        className="weather-detail-wt__item-icon"
      />
      <div className="weather-detail-wt__item-temperature">
        {temperatureCelcius} / {temperatureFahrenheit}
      </div>
      <div className="weather-detail-wt__item-status">{weatherName}</div>
      <div className="weather-detail-wt__item-status">{formattedDate}</div>
    </div>
  );
};

const WeatherDetailWtContainer: React.FC<WeatherDataProps> = ({ weathers }) => {
  return (
    <>
      <div className="weather-detail-wt mt-5 mb-5">
        <div className="weather-detail-wt__heading">
          Prakiraan Cuaca Selama 3 Hari
        </div>
        <div className="weather-detail-wt__itemlist">
          {weathers?.map((weather, index) => (
            <WeatherDetailWtItem key={+index} {...weather} />
          ))}
        </div>
      </div>
    </>
  );
};

export default WeatherDetailWtContainer;
