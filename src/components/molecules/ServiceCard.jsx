import React from 'react'
import { useInView } from 'react-intersection-observer'

const ServiceCard = ({ title, description, delay = 0 }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  })
  
  return (
    <div
      ref={ref}
      className={`bg-concrete-medium p-6 border border-concrete-grey hover:border-neon-cyan transition-all duration-300 hover:shadow-lg group ${
        inView ? 'animate-fade-in' : 'opacity-0'
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <h3 className="text-xl font-heading font-semibold text-concrete-light group-hover:text-neon-cyan transition-colors duration-300 mb-3">
        {title}
      </h3>
      {description && (
        <p className="text-concrete-grey text-sm leading-relaxed">
          {description}
        </p>
      )}
    </div>
  )
}

export default ServiceCard