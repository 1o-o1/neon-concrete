import React, { useState } from 'react'
import Button from '../atoms/Button'
import Icon from '../atoms/Icon'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  
  const navItems = [
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' }
  ]
  
  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }
  
  return (
    <nav className="flex items-center space-x-8">
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-8">
        {navItems.map((item) => (
          <button
            key={item.label}
            onClick={() => scrollToSection(item.href)}
            className="text-concrete-light hover:text-neon-cyan transition-colors duration-300 font-medium"
          >
            {item.label}
          </button>
        ))}
        <Button
          onClick={() => scrollToSection('#contact')}
          size="sm"
        >
          Get a Free Estimate
        </Button>
      </div>
      
      {/* Mobile Navigation */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-concrete-light hover:text-neon-cyan transition-colors duration-300"
        >
          <Icon name={isOpen ? 'close' : 'menu'} size={24} />
        </button>
        
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-concrete-dark border-t border-concrete-medium shadow-lg">
            <div className="flex flex-col space-y-4 p-6">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-concrete-light hover:text-neon-cyan transition-colors duration-300 font-medium text-left"
                >
                  {item.label}
                </button>
              ))}
              <Button
                onClick={() => scrollToSection('#contact')}
                size="sm"
                className="self-start"
              >
                Get a Free Estimate
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation