import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import RootLayout from '../layouts/RootLayout';
import ErrorPage from '../components/shared/error-page';
import Quake from '../pages/Quake';
import Weather from '../pages/Weather';
import WeatherDetail from '../pages/WeatherDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/gempa',
        element: <Quake />,
      },
      {
        path: '/cuaca',
        element: <Weather />,
      },
      {
        path: '/cuaca/:prov/:city',
        element: <WeatherDetail />,
      },
    ],
  },
]);

export { router };
