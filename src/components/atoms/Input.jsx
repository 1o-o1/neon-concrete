// src/components/atoms/Input.jsx
import React from 'react'

const Input = ({ 
  type = 'text', 
  placeholder, 
  value, 
  onChange, 
  name,
  required = false,
  className = '',
  ...props 
}) => {
  const baseClasses = 'w-full px-4 py-3 bg-concrete-medium border border-concrete-grey text-concrete-light placeholder-concrete-grey focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-colors duration-300'
  
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      className={`${baseClasses} ${className}`}
      {...props}
    />
  )
}

export default Input