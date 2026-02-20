import React from 'react';
import type { ButtonProps } from '../types';

/**
 * Reusable Button Component for Wealth Advisory Theme
 */
export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  disabled = false,
  className = '',
  type = 'button',
  fullWidth = false,
  ...props
}) => {
  // Base button styles
  const baseStyles = `
    inline-flex items-center justify-center font-medium rounded-lg
    transition-all duration-300 ease-smooth
    focus:outline-none focus:ring-2 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
    transform hover:-translate-y-1 hover:shadow-lg
  `;

  // Size variants
  const sizeStyles = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-3 text-base',
    lg: 'px-6 py-4 text-lg',
  };

 const variantStyles = {
    primary: `
      bg-wealth-navy text-white
      hover:bg-wealth-gold hover:text-wealth-navy
      focus:ring-wealth-gold
      shadow-md hover:shadow-xl
      border-2 border-transparent
      opacity-100 visible
    `,
    secondary: `
      bg-wealth-gold text-wealth-navy
      hover:bg-wealth-navy hover:text-white
      focus:ring-wealth-navy
      shadow-md hover:shadow-xl
      border-2 border-transparent
    `,
    ghost: `
      bg-transparent text-wealth-navy
      hover:bg-wealth-navy/10
      focus:ring-wealth-navy
      border-2 border-transparent
    `,
    outline: `
      bg-transparent text-wealth-navy border-2 border-wealth-navy
      hover:bg-wealth-navy hover:text-white
      focus:ring-wealth-navy
      shadow-sm hover:shadow-md
    `,
  };

  // Full width style
  const fullWidthStyle = fullWidth ? 'w-full' : '';

  // Combine all styles
  const buttonStyles = `
    ${baseStyles}
    ${sizeStyles[size]}
    ${variantStyles[variant]}
    ${fullWidthStyle}
    ${className}
  `;

  return (
    <button
      type={type}
      className={buttonStyles}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;