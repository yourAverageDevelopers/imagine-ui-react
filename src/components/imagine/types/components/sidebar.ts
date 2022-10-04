import { DivElProps } from '~/itypes';

type SidebarPosition = 'top' | 'right' | 'left' | 'bottom';

export interface SidebarProps extends DivElProps {
  active: boolean;
  position?: SidebarPosition;
}
