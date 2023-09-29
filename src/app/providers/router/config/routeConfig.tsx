import { RouteProps } from 'react-router';
import NotFoundPage from '@pages/NotFoundPage';
import MainPage from '@pages/MainPage';
import { AppPages, getMainPageRoute } from '@shared/constants/route';

export const routeConfig: Record<AppPages, RouteProps> = {
  [AppPages.MAIN]: {
    path: getMainPageRoute(),
    element: <MainPage />,
  },
  [AppPages.NOT_FOUND]: {
    path: '*',
    element: <NotFoundPage />,
  },
};
