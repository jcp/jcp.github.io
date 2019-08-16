import React from 'react';

const Link = ({ to, target, children }) => {
  return (
    <a href={to} target={target}>
      {children}
    </a>
  );
};

export default Link;
