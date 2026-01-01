import React from 'react';

const Card = ({ children, className = '', elevated = false, padding = 'medium' }) => {
  const paddingSizes = {
    none: '',
    small: 'p-4',
    medium: 'p-6',
    large: 'p-8',
  };

  const shadowClass = elevated ? 'shadow-xl' : 'shadow-md';

  return (
    <div className={`bg-white rounded-lg ${shadowClass} ${paddingSizes[padding]} ${className}`}>
      {children}
    </div>
  );
};

export default Card;
