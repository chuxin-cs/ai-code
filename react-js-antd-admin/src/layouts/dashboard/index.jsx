import { Layout } from 'antd';
import { Suspense } from 'react';

// components
import Nav from './Nav';
import Main from './Main';
import Header from './Header';
import { CircleLoading } from '@/components/loading';

const DashboardLayout = () => {
  return (
    <Layout>
      <Suspense fallback={<CircleLoading />}>
        <Layout>
          {/* 页头 */}
          <Header />
          {/* 导航栏 */}
          <Nav />
          {/* 主体内容 */}
          <Main />
        </Layout>
      </Suspense>
    </Layout>
  );
};

export default DashboardLayout;
