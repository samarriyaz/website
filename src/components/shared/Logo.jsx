import React from 'react';
import logoImage from '../../assets/logo.png';

const Logo = ({ className = '', size = 'medium' }) => {
  const sizes = {
    small: 'h-8',
    medium: 'h-12',
    large: 'h-16',
    xlarge: 'h-24',
  };

  return (
    <div className={`flex items-center ${className}`}>
      <img
        src={logoImage}
        alt="Integrative Wellness Partners"
        className={`${sizes[size]} w-auto`}
      />
    </div>
  );
};

export default Logo;
