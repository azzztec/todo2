import { memo } from 'react';
import { Route, Routes } from 'react-router';
import { routeConfig } from '../config/routeConfig';

const AppRouter = () => {
  return (
    <Routes>
      {Object.values(routeConfig).map(({ element, path }) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Routes>
  );
};

export default memo(AppRouter);
