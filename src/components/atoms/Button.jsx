import React from 'react'

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  onClick,
  type = 'button',
  ...props 
}) => {
  const baseClasses = 'font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-neon-cyan focus:ring-opacity-50'
  
  const variants = {
    primary: 'bg-neon-cyan text-concrete-dark hover:bg-cyan-400 neon-glow',
    secondary: 'border-2 border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-concrete-dark',
    ghost: 'text-concrete-light hover:text-neon-cyan'
  }
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }
  
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`
  
  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button