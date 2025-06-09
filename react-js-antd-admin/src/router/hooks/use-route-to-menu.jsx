// lib
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
// components
import { SvgIcon } from '@/components/icon';
// store
import { useSettings } from '@/store/settingStore';
// outher
import { cn } from '@/utils';

const renderIcon = (icon) => {
  if (typeof icon !== 'string') return icon;

  return icon.startsWith('ic') ? (
    <SvgIcon icon={icon} size={24} className='ant-menu-item-icon' />
  ) : (
    <div icon={icon} size={24} className='ant-menu-item-icon' />
  );
};

/**
 *   routes -> menus
 */
export function useRouteToMenuFn() {
  const { t } = useTranslation();
  const { themeLayout } = useSettings();

  const routeToMenuFn = useCallback(
    (items) => {
      return items
        .filter((item) => !item.meta?.hideMenu)
        .map((item) => {
          const { meta, children } = item;
          if (!meta) return {};

          const menuItem = {
            key: meta.key,
            disabled: meta.disabled,
            label: (
              <div
                className={cn(
                  'inline-flex items-center overflow-hidden',
                  themeLayout === 'horizontal'
                    ? 'justify-start'
                    : 'justify-between'
                )}
              >
                <div className=''>{t(meta.label)}</div>
                {meta.suffix}
              </div>
            ),
            ...(meta.icon && { icon: renderIcon(meta.icon) }),
            ...(children && { children: routeToMenuFn(children) }),
          };

          return menuItem;
        });
    },
    [t, themeLayout]
  );
  return routeToMenuFn;
}
