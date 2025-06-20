// src/components/atoms/Heading.jsx
import React from 'react'

const Heading = ({ 
  level = 1, 
  children, 
  className = '', 
  neon = false,
  ...props 
}) => {
  const Tag = `h${level}`
  
  const baseClasses = 'font-heading font-bold'
  const neonClass = neon ? 'text-neon-cyan' : 'text-concrete-light'
  
  const sizes = {
    1: 'text-4xl md:text-6xl lg:text-7xl',
    2: 'text-3xl md:text-4xl lg:text-5xl',
    3: 'text-2xl md:text-3xl lg:text-4xl',
    4: 'text-xl md:text-2xl',
    5: 'text-lg md:text-xl',
    6: 'text-base md:text-lg'
  }
  
  const classes = `${baseClasses} ${sizes[level]} ${neonClass} ${className}`
  
  return (
    <Tag className={classes} {...props}>
      {children}
    </Tag>
  )
}

export default Heading

