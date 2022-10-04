import React from 'react';

import { MenuItemProps } from '~/itypes';
import { generateCSSClasses } from '~/iutils';

export const MenuItem: React.FC<MenuItemProps> = ({ children, className, ...props }) => {
  const classList = generateCSSClasses(className, { item: true });

  return (
    <div className={classList} {...props}>
      {children}
    </div>
  );
};
