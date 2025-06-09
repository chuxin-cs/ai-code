import { RouterProvider } from 'react-router/dom';
import { Navigate, createHashRouter } from 'react-router';

// hooks
import { usePermissionRoutes } from './hooks';

// components
import { PUBLIC_ROUTE, ERROR_ROUTE, NO_MATCHED_ROUTE } from './sys/index.js';
import DashboardLayout from '@/layouts/dashboard';
import ProtectedRoute from './components/ProtectedRoute';

// var
const { VITE_APP_HOMEPAGE: HOMEPAGE } = import.meta.env;

const Router = () => {
  const permissionRoutes = usePermissionRoutes();
  //
  const PROTECTED_ROUTE = {
    path: '/',
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      // 默认的重定向
      { index: true, element: <Navigate to={HOMEPAGE} replace /> },
      // 业务模块
      ...permissionRoutes,
    ],
  };
  const routes = [
    PUBLIC_ROUTE, // 公共路由
    PROTECTED_ROUTE, // 受保护的路由(业务路由)
    ERROR_ROUTE, // 错误路由
    NO_MATCHED_ROUTE, // 上面都没有匹配到的路由，放最后
  ];
  const router = createHashRouter(routes);
  return <RouterProvider router={router} />;
};

export default Router;
