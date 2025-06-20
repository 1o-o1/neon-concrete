import React from 'react'
import logo from '../../assets/logo.svg'

const Footer = () => {
  return (
    <footer className="bg-concrete-dark border-t border-concrete-grey">
      <div className="container-custom py-12">
        <div className="text-center">
          <div className="mb-6">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center justify-center hover:opacity-80 transition-opacity duration-300 mx-auto"
            >
              <img 
                src={logo} 
                alt="Neon Concrete Logo" 
                className="h-6 md:h-8 w-auto"
              />
            </button>
          </div>
          
          <p className="text-concrete-grey mb-6">
            Modern Craftsmanship. Foundational Strength.
          </p>
          
          <div className="border-t border-concrete-grey pt-6">
            <p className="text-concrete-grey text-sm">
              © 2025 Neon Concrete Construction LLC. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer