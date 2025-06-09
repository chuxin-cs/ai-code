// lib
import { useMemo } from 'react';
// components
import { Menu } from 'antd';
// hooks
import { usePermissionRoutes, useRouteToMenuFn } from '@/router/hooks';
// outher
import { menuFilter } from '@/router/utils';
import { NAV_HORIZONTAL_HEIGHT } from '../config';
import { themeVars } from '@/theme/theme.css';

const NavHorizontal = () => {
  // menu list
  const routeToMenuFn = useRouteToMenuFn();
  const permissionRoutes = usePermissionRoutes();
  const menuList = useMemo(() => {
    const menuRoutes = menuFilter(permissionRoutes);
    return routeToMenuFn(menuRoutes);
  }, [routeToMenuFn, permissionRoutes]);

  const selectedKeys = []; // TODO: get selectedKey

  // listeners
  const onClick = (e) => {
    console.log('click ', e);
  };

  return (
    <div className='w-screen' style={{ height: NAV_HORIZONTAL_HEIGHT }}>
      <Menu
        mode='horizontal'
        items={menuList}
        defaultOpenKeys={[]}
        selectedKeys={selectedKeys}
        onClick={onClick}
        className='!border-none'
        style={{ background: themeVars.colors.background.default }}
      />
    </div>
  );
};

export default NavHorizontal;
