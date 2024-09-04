import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import RootLayout from '../layouts/RootLayout';
import ErrorPage from '../components/shared/error-page';
import Quake from '../pages/Quake';

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
        path: '/info-gempa',
        element: <Quake />,
      },
    ],
  },
]);

export { router };
