import { InputElProps } from '~/itypes';

import { Size } from './common';

export interface InputProps extends InputElProps {
  fluid?: boolean;
  size?: Size;
  circular?: boolean;
}
