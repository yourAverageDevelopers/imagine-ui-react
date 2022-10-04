import React from 'react';

export const DropdownItem: React.FC<{ children: React.ReactNode }> = ({ children, ...props }) => (
  <div {...props} className='item'>
    {children}
  </div>
);
