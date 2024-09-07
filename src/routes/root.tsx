import { createBrowserRouter, Navigate } from 'react-router-dom';
import RootLayout from '../layouts/RootLayout';
import WeatherForecast from '../pages/WeatherForecast';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <Navigate to="/" replace />,
    children: [
      {
        index: true,
        element: <WeatherForecast />,
      },
    ],
  },
]);

export { router };
