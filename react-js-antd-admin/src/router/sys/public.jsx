import { ErrorBoundary } from "react-error-boundary";

import Login from '@/pages/sys/login';
import PageError from "@/pages/sys/error/PageError";

/**
 * Public routes { 公共路由，不需要登录即可访问 }
 * @author chuxin
 */
export const PUBLIC_ROUTE = {
  path: '/login',
  element: (
    <ErrorBoundary FallbackComponent={PageError}>
      <Login />
    </ErrorBoundary>
  ),
};
