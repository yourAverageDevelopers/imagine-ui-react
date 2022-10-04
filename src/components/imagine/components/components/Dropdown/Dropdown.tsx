import classNames from 'classnames';
import React from 'react';

import { DropdownText } from './DropdownText';

interface DropdownProps {
  children?: React.ReactNode;
  active?: boolean;
  text?: string;
  closeOnBlur?: boolean;
  closeOnSelect?: boolean;
  selection?: boolean;
  button?: boolean;
  size?: string;
  animation?: string;
  className?: string;
  floating?: boolean;
  onClick?: (event: React.MouseEvent) => void;
  onOpen?: () => void;
  onClose?: () => void;
  beforeOpen?: () => void;
  open?: () => void;
  afterOpen?: () => void;
  beforeClose?: () => void;
  close?: () => void;
  afterClose?: () => void;
  onItemSelect?: (event: React.MouseEvent) => void;
}

export const Dropdown: React.FC<DropdownProps> = ({
  children,
  active,
  animation,
  text,
  button,
  size,
}) => {
  let classList = 'ui';
  if (active) classList = classNames(classList, animation, 'in', 'active');
  else classList = classNames(classList, animation, 'out');
  if (size) classList = classNames(classList, size);
  classList = classNames(classList, 'dropdown');
  return (
    <div className={classList}>
      <DropdownText size={size} button={button}>
        {text}
      </DropdownText>
      {children}
    </div>
  );
};

Dropdown.defaultProps = {
  active: false,
  animation: 'scale',
};
