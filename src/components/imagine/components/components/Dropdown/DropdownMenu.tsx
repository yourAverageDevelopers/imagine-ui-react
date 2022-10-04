import classNames from 'classnames';
import React from 'react';

interface DropdownMenuProps {
  children: React.ReactNode;
  position: string;
  fluid: boolean;
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({ position, children }) => {
  let classList = '';
  classList = classNames(classList, position);
  classList = classNames(classList, 'menu');
  return <div className={classList}>{children}</div>;
};
