import React from 'react';

import { SidebarProps } from '~/itypes';
import { generateCSSClasses } from '~/iutils';

export const Sidebar: React.FC<SidebarProps> = ({
  className,
  position,
  active,
  children,
  ...props
}) => {
  const classList = generateCSSClasses(className, {
    active,
    left: position === 'left' || position === undefined,
    right: position === 'right',
    top: position === 'top',
    bottom: position === 'bottom',
    sidebar: true
  });

  return (
    <div className={classList} {...props}>
      {children}
    </div>
  );
};
