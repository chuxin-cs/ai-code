// outher
import { HEADER_HEIGHT } from '../config';
// components
import Logo from '@/components/logo';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
// store
import { useSettings } from '@/store/settingStore';

const NavLogo = ({ collapsed, onToggle }) => {
  const { themeLayout } = useSettings();
  return (
    <div
      style={{ height: `${HEADER_HEIGHT}px` }}
      className='relative flex items-center justify-center py-4'
    >
      <div className='flex items-center'>
        <Logo />
        {themeLayout !== 'mini' && (
          <span className='ml-2 text-xl font-bold text-primary'>
            Slash Admin
          </span>
        )}
      </div>
      <div
        onClick={onToggle}
        onKeyDown={onToggle}
        className='absolute right-0 transition-all top-1/2 z-50 hidden size-6 translate-x-1/2 -translate-y-1/2 cursor-pointer select-none items-center justify-center rounded-full text-center md:flex border border-dashed border-gray-500/10 text-sm bg-bg-paper'
      >
        {collapsed ? (
          <RightOutlined className='text-xs text-text-disabled' />
        ) : (
          <LeftOutlined className='text-xs text-text-disabled' />
        )}
      </div>
    </div>
  );
};

export default NavLogo;
