// lib
import { useMemo, useState } from 'react';
// router
import { useMatches, useNavigate } from 'react-router';
// store
import { useSettings, useSettingActions } from '@/store/settingStore';
// components
import { Layout, Menu } from 'antd';
const { Sider } = Layout;
import NavLogo from './NavLogo';
// hooks
import {
  usePathname,
  useFlattenedRoutes,
  usePermissionRoutes,
  useRouteToMenuFn,
} from '@/router/hooks';
// outher
import { NAV_WIDTH } from '../config';
import { menuFilter } from '@/router/utils';

const NavVertical = (props) => {
  // router
  const navigate = useNavigate();
  const matches = useMatches();
  const pathname = usePathname();

  // store
  const settings = useSettings();
  const { themeLayout, themeMode, darkSidebar } = settings;
  const { setSettings } = useSettingActions();

  // sider
  const collapsed = useMemo(() => themeLayout === 'mini', [themeLayout]);
  const sidebarTheme = useMemo(() => {
    if (themeMode === 'dark') {
      return darkSidebar ? 'light' : 'dark';
    }
    return darkSidebar ? 'dark' : 'light';
  }, [themeMode, darkSidebar]);
  const handleToggleCollapsed = () => {
    setSettings({
      ...settings,
      themeLayout: collapsed ? 'vertical' : 'mini',
    });
    if (collapsed) {
      const keys = matches
        .filter(
          (match) => match.pathname !== '/' && match.pathname !== pathname
        )
        .map((match) => match.pathname);
      // hack resolution of https://github.com/d3george/slash-admin/issues/104
      setTimeout(() => {
        setOpenKeys(keys);
      }, 0);
      return;
    }
  };

  // menu
  const routeToMenuFn = useRouteToMenuFn();
  const permissionRoutes = usePermissionRoutes();
  const flattenedRoutes = useFlattenedRoutes();
  const menuList = useMemo(() => {
    const menuRoutes = menuFilter(permissionRoutes);
    return routeToMenuFn(menuRoutes);
  }, [routeToMenuFn, permissionRoutes]);
  const [selectedKeys, setSelectedKeys] = useState([pathname]);
  const [openKeys, setOpenKeys] = useState(() => {
    if (!collapsed) {
      const keys = matches
        .filter(
          (match) => match.pathname !== '/' && match.pathname !== pathname
        )
        .map((match) => match.pathname);
      return keys;
    }
    return [];
  });

  // menu
  const onClick = ({ key }) => {
    const nextLink = flattenedRoutes?.find((e) => e.key === key);
    if (nextLink?.hideTab && nextLink?.frameSrc) {
      window.open(nextLink?.frameSrc, '_blank');
      return;
    }

    setSelectedKeys([key]);
    navigate(key);
    props?.closeSideBarDrawer?.();
  };

  const handleOpenChange = (keys) => {
    if (!settings.accordion) {
      setOpenKeys(keys);
      return;
    }
    // 手风琴模式

    const latestOpenKey = keys.find((key) => !openKeys.includes(key));
    // 收起
    if (!latestOpenKey) {
      const closedKey = openKeys.find((key) => !keys.includes(key));
      if (closedKey) {
        // 只移除被收起的菜单，保留其他展开状态
        setOpenKeys(openKeys.filter((key) => key !== closedKey));
      }
      return;
    }
    // 展开
    const getKeyLevel = (key) => (key.match(/\//g) || []).length;
    const latestKeyLevel = getKeyLevel(latestOpenKey);
    // 过滤掉同层级的其他 key，保留不同层级的 key
    const newOpenKeys = openKeys.filter(
      (key) => getKeyLevel(key) !== latestKeyLevel
    );

    // 找到当前打开菜单的所有父级路径
    const parentKeys = matches
      .filter(
        (match) =>
          latestOpenKey.startsWith(match.pathname) &&
          match.pathname !== '/' &&
          match.pathname !== latestOpenKey
      )
      .map((match) => match.pathname);

    setOpenKeys([...new Set([...parentKeys, ...newOpenKeys, latestOpenKey])]);
  };

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      width={NAV_WIDTH}
      theme={sidebarTheme}
      className='!fixed left-0 top-0 h-screen border-r border-dashed border-gray-500/10 chuxin-sider'
    >
      <div className='flex h-full flex-col'>
        <NavLogo collapsed={collapsed} onToggle={handleToggleCollapsed} />

        <Menu
          mode='inline'
          items={menuList}
          theme={sidebarTheme}
          selectedKeys={selectedKeys}
          openKeys={openKeys}
          onOpenChange={handleOpenChange}
          className='!border-none chuxin-menu'
          onClick={onClick}
        />
      </div>
    </Sider>
  );
};

export default NavVertical;
