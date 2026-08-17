import { createBrowserRouter } from 'react-router';
import App from '../layout/app';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
]);
