import React from 'react';

import { ContainerProps } from '~/itypes';
import { generateCSSClasses } from '~/iutils';

export const Container: React.FC<ContainerProps> = ({ children, padded, className, ...props }) => {
  const classList = generateCSSClasses(className, { padded, container: true });

  return (
    <div className={classList} {...props}>
      {children}
    </div>
  );
};
