// lib
import { useState } from 'react';
// store
import { useSettings } from '@/store/settingStore';
// components
import Logo from '@/components/logo';
import SearchBar from '../../components/SearchBar';
import { IconButton, Iconify, SvgIcon } from '@/components/icon';
// outher
import { cn } from '@/utils';
import { rgbAlpha } from '@/utils/theme';
import { themeVars } from '@/theme/theme.css';
import { HEADER_HEIGHT, NAV_COLLAPSED_WIDTH, NAV_WIDTH } from '../config';
import ListBody from 'ant-design-vue/es/transfer/ListBody';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { themeLayout, breadCrumb } = useSettings();

  const headerStyle = {
    borderBottom:
      themeLayout === 'horizontal'
        ? `1px dashed ${rgbAlpha(
            themeVars.colors.palette.gray['500Channel'],
            0.2
          )}`
        : '',
    backgroundColor: rgbAlpha(themeVars.colors.background.defaultChannel, 0.9),
    width: '100%',
  };

  return (
    <>
      <header
        className={cn(
          themeLayout === 'horizontal'
            ? 'relative'
            : 'sticky top-0 right-0 left-auto'
        )}
        style={headerStyle}
      >
        <div
          className='flex flex-grow items-center justify-between px-4 text-gray backdrop-blur xl:px-6 2xl:px-10'
          style={{
            height: HEADER_HEIGHT,
            transition: 'height 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
          }}
        >
          <div className='flex items-baseline'>
            {themeLayout !== 'horizontal' ? (
              <IconButton
                onClick={() => setDrawerOpen(true)}
                className='h-10 w-10 md:hidden'
              >
                <SvgIcon icon='ic-menu' size='24' />
              </IconButton>
            ) : (
              <Logo />
            )}
          </div>

          <div className='flex'>
            <SearchBar />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
