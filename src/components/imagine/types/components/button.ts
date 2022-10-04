import { ButtonElProps } from '../dom';
import { Colors, Size } from './common';

export interface ButtonProps extends ButtonElProps {
  fluid?: boolean;
  color?: Colors;
  circular?: boolean;
  size?: Size;
}
