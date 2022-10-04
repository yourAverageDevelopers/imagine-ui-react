import React from 'react';

import { ButtonProps } from '~/itypes';
import { generateCSSClasses } from '~/iutils';

export const Button: React.FC<ButtonProps> = ({
  fluid,
  circular,
  color,
  children,
  className,
  size,
  ...props
}) => {
  const classList = generateCSSClasses(className, { fluid, size, circular, color, button: true });

  return (
    <button className={classList} {...props}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  fluid: false
};
