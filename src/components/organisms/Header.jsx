import React, { useState, useEffect } from 'react'
import Navigation from '../molecules/Navigation'
import logo from '../../assets/logo.svg'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-concrete-dark/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center hover:opacity-80 transition-opacity duration-300"
            >
              <img 
                src={logo} 
                alt="Neon Concrete Logo" 
                className="h-8 md:h-10 w-auto"
              />
            </button>
          </div>
          
          {/* Navigation */}
          <Navigation />
        </div>
      </div>
    </header>
  )
}

export default Header