import { Outlet } from "react-router";
import { Suspense, lazy } from 'react';

// components
import SimpleLayout from "@/layouts/simple";
import { CircleLoading } from '@/components/loading';
import ProtectedRoute from "../components/ProtectedRoute";
const Page403 = lazy(() => import('@/pages/sys/error/Page403'));
const Page404 = lazy(() => import('@/pages/sys/error/Page404'));
const Page500 = lazy(() => import('@/pages/sys/error/Page500'));


export const ERROR_ROUTE = {
  element: (
    <ProtectedRoute>
      <SimpleLayout>
        <Suspense fallback={<CircleLoading />}>
          <Outlet />
        </Suspense>
      </SimpleLayout>
    </ProtectedRoute>
  ),
  children: [
		{ path: "403", element: <Page403 /> },
		{ path: "404", element: <Page404 /> },
		{ path: "500", element: <Page500 /> },
	],
};
