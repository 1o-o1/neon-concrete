import React from 'react'
import { useInView } from 'react-intersection-observer'
import Heading from '../atoms/Heading'
import Button from '../atoms/Button'

const HeroSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  })
  
  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-concrete-dark via-concrete-medium to-concrete-dark">
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      {/* Geometric background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-neon-cyan/20 rotate-45"></div>
        <div className="absolute bottom-40 right-20 w-24 h-24 border-2 border-neon-cyan/30 rotate-12"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-neon-cyan/10 rotate-45"></div>
      </div>
      
      {/* Content */}
      <div ref={ref} className="relative z-10 container-custom text-center">
        <div className={`space-y-8 ${inView ? 'animate-slide-up' : 'opacity-0'}`}>
          <Heading level={1} className="leading-tight">
            <span className="block">NEON</span>
            <span className="block text-neon-cyan">CONCRETE</span>
          </Heading>
          
          <p className="text-xl md:text-2xl text-concrete-grey max-w-3xl mx-auto leading-relaxed">
            Modern Craftsmanship. Foundational Strength.
            <span className="block mt-2 text-neon-cyan font-semibold">
              Serving North Texas (Dallas-Fort Worth and nearby)
            </span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="text-lg px-12 py-4"
            >
              Get a Free Estimate
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => document.querySelector('#services').scrollIntoView({ behavior: 'smooth' })}
              className="text-lg px-12 py-4"
            >
              Our Services
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-neon-cyan rounded-full flex justify-center">
          <div className="w-1 h-3 bg-neon-cyan rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection