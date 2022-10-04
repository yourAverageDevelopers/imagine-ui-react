import React from 'react';

export const DropdownHeader: React.FC<{ children: React.ReactNode }> = ({ children, ...props }) => (
  <div {...props} className='header'>
    {children}
  </div>
);
