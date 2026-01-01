import React from 'react';

const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  onClick,
  type = 'button',
  className = '',
}) => {
  const baseStyles = 'font-semibold rounded-lg transition-all duration-200 inline-flex items-center justify-center';

  const variants = {
    primary: 'bg-primary text-white hover:bg-primary-dark shadow-md hover:shadow-lg',
    secondary: 'bg-secondary text-white hover:bg-secondary-dark shadow-md hover:shadow-lg',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
    ghost: 'text-primary hover:bg-primary-light hover:bg-opacity-10',
  };

  const sizes = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg',
  };

  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
