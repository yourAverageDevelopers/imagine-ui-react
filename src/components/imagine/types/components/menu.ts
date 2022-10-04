import { DivElProps } from '~/itypes';

type MenuDirection = 'vertical' | 'horizontal';

export interface MenuProps extends DivElProps {
  direction?: MenuDirection;
}

export interface MenuItemProps extends DivElProps {
  active?: boolean;
}
