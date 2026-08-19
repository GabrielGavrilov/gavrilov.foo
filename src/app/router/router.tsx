import { createBrowserRouter } from 'react-router';
import App from '../layout/app';
import Home from '../../features/home/home';
import Projects from '../../features/projects/projects';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/projects',
        element: <Projects />,
      },
    ],
  },
]);
