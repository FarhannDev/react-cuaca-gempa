import React, { useEffect, useState } from 'react';
import '../styles/App.css';
import reactLogo from '/icons/react.svg';
import viteLogo from '/icons/vite.svg';
import apiService from '../services/apiService';

const Home: React.FC = () => {
  const [count, setCount] = useState(0);
  const [quake, setQuake] = useState<Quake | undefined>();
  const [weatherProvince, setWeatherProvince] =
    useState<WeatherProvince | null>(null);

  useEffect(() => {
    const fetchQuakeData = async () => {
      const quakeData: Quake | undefined = await apiService.getQuake();
      setQuake(quakeData);
    };

    fetchQuakeData();
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={reactLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={viteLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <img src={quake?.shakemap} alt="" />
    </>
  );
};

export default Home;
