import React from 'react'

const Label = ({ children, htmlFor, className = '', ...props }) => {
  const baseClasses = 'block text-sm font-medium text-concrete-light mb-2'
  
  return (
    <label
      htmlFor={htmlFor}
      className={`${baseClasses} ${className}`}
      {...props}
    >
      {children}
    </label>
  )
}

export default Label
