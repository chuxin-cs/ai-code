import { createHashRouter, Outlet, RouterProvider } from 'react-router-dom';

function Router() {
  // 受保护的路由 其实就是需要登录的路由
  const PROTECTED_ROUTE = {
    path: '/',
    element: (
      <div>
        <h1>Protected Route</h1>
        <Outlet />
      </div>
    ),
    children: [{ index: true, element: <div>Protected Index</div> }],
  };
  // 路由集合
  const routes = [PROTECTED_ROUTE];
  // 创建hash路由
  const router = createHashRouter(routes);
  // 返回路由
  return <RouterProvider router={router} />;
}

export default Router;
