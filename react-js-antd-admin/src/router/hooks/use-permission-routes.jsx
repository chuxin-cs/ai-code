import { getRoutesFromModules } from '../utils';

const ROUTE_MODE = import.meta.env.VITE_APP_ROUTER_MODE;
export const usePermissionRoutes = () => {
  if (ROUTE_MODE === 'module') {
    return getRoutesFromModules();
  }
};
