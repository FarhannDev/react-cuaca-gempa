import * as React from 'react';
import { IoLocation } from 'react-icons/io5';
import { Link } from 'react-router-dom';

type IProps = { domain: string; description: string };

const WeatherItem: React.FC<IProps> = ({ domain, description }) => (
  <>
    <div className="weather-item">
      <Link to="/" className="weather-item__description">
        <div className="d-flex justify-content-arround align-items-center g-3">
          <IoLocation className="me-2" color="#fff" fontSize={20} />
          {description}, {domain}
        </div>
      </Link>
    </div>
  </>
);

export default WeatherItem;
