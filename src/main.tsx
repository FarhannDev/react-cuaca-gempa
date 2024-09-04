import { StrictMode } from 'react';
import { createRoot, Root } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/root';
import './styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const rootElement = document.getElementById('root') as HTMLElement;
const root = createRoot(rootElement) as Root;

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
