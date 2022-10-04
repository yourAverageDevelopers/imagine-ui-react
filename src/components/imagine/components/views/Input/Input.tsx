import React from 'react';

import { InputProps } from '~/itypes';
import { generateCSSClasses } from '~/iutils';

export const Input: React.FC<InputProps> = ({ fluid, size, circular, className, ...props }) => {
  const classList = generateCSSClasses(className, { fluid, size, circular, input: true });

  return (
    <div className={classList} {...props}>
      <input />
    </div>
  );
};
