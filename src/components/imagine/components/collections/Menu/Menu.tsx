import React from 'react';

import { MenuProps } from '~/itypes';
import { generateCSSClasses } from '~/iutils';

export const Menu: React.FC<MenuProps> = ({ children, className, direction, ...props }) => {
  const classList = generateCSSClasses(className, {
    vertical: direction === 'vertical',
    horizontal: direction === 'horizontal',
    menu: true
  });

  return (
    <div className={classList} {...props}>
      {children}
    </div>
  );
};
