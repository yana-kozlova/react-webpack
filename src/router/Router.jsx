import { Route, Routes } from 'react-router-dom';

import { AppRoutes } from './AppRoutes';

const useRouter = () => {
  const createRoute = ({ element, path }) => {
    return <Route path={path} element={element} key={path} />;
  };

  return { createRoute };
};

export const Router = () => {
  const { createRoute } = useRouter();
  return <Routes>{AppRoutes.map(createRoute)}</Routes>;
};
