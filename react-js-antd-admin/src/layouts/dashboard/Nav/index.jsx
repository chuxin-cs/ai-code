// store
import { useSettings } from '@/store/settingStore';

// components
import NavVertical from './NavVertical';
import NavHorizontal from './NavHorizontal';

const Nav = () => {
  const { themeLayout } = useSettings();
  const isPc = true;
  if (themeLayout === 'horizontal') return <NavHorizontal />;
  if (isPc) return <NavVertical />;
  return null;
};

export default Nav;
