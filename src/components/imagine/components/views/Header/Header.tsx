import React from 'react';

import { HeaderProps } from '~/itypes';
import { generateCSSClasses } from '~/iutils';

export const Header: React.FC<HeaderProps> = ({ children, className, size, ...props }) => {
  const classList = generateCSSClasses(className, { size, header: true });

  return (
    <>
      <div className={classList} {...props}>
        {children}
      </div>
    </>
  );
};
