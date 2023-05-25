import { ROUTES } from './routes';
import { About, Contact, Home, NotFound } from '../pages';

export const AppRoutes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: ROUTES.CONTACT,
    element: <Contact />,
  },
  {
    path: ROUTES.ABOUT,
    element: <About />,
  },
  {
    path: ROUTES.NOT_FOUND,
    element: <NotFound />,
  },
];
