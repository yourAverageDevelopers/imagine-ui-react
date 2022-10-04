/* eslint-disable @typescript-eslint/no-explicit-any */
import classNames from 'classnames';

import { Colors, Size } from '~/itypes';

const generateColorClasses = (color?: Colors) => ({
  blue: color === 'blue',
  red: color === 'red',
  green: color === 'green',
  pink: color === 'pink'
});

const generateSizeClasses = (size?: Size) => ({
  tiny: size === 'tiny',
  small: size === 'small',
  big: size === 'big',
  massive: size === 'massive'
});

export const generateCSSClasses = (customClasses = '', componentSpecificProps: any = {}) => {
  const { size, color, ...props } = componentSpecificProps;

  let classList = '';
  classList = classNames({
    ui: true,
    ...generateColorClasses(color),
    ...generateSizeClasses(size),
    ...props
  });
  return classNames(classList, customClasses);
};
