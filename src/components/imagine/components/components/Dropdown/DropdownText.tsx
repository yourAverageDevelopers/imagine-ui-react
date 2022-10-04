import React from 'react';

interface DropdownTextProps {
  color?: string;
  size?: string;
  button?: React.ReactNode;
  children?: React.ReactNode;
}

export const DropdownText: React.FC<DropdownTextProps> = (props) => {
  if (props.button) {
    const { color, ...remainingProps } = props;
    return <button {...remainingProps} color={color} className='text' />;
  }
  return <div {...props} className='text' />;
};
