import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  disabled,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 border text-base font-medium rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "border-transparent text-white bg-primary-700 hover:bg-primary-800 focus:ring-primary-500 shadow-sm hover:shadow-md",
    secondary: "border-transparent text-primary-900 bg-primary-100 hover:bg-primary-200 focus:ring-primary-500",
    outline: "border-primary-700 text-primary-700 bg-transparent hover:bg-primary-50 focus:ring-primary-500",
    ghost: "border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:ring-slate-500"
  };

  const widthStyles = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthStyles} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;