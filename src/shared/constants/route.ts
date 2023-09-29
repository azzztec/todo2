export enum AppPages {
  MAIN,
  NOT_FOUND,
}

export const getMainPageRoute = () => '/';

export const AppRouteByPathPattern: Record<string, AppPages> = {
  [getMainPageRoute()]: AppPages.MAIN,
};
