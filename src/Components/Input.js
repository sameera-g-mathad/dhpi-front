import React from 'react';

export const Input = ({ children }) => {
  return (
    <div className="flex flex-col">
      <span className="flex flex-col py-2">{children}</span>
    </div>
  );
};
