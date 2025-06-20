import React from 'react'
import { useInView } from 'react-intersection-observer'
import Heading from '../atoms/Heading'
import ServiceCard from '../molecules/ServiceCard'

const ServicesSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  })
  
  const services = [
    { title: 'Commercial Concrete', description: 'Professional concrete solutions for businesses and commercial properties.' },
    { title: 'Concrete Driveways & Sidewalks', description: 'Durable and attractive pathways that enhance your property value.' },
    { title: 'Concrete Foundations', description: 'Strong, reliable foundations built to last for generations.' },
    { title: 'Concrete Installation', description: 'Expert installation services for all your concrete needs.' },
    { title: 'Concrete Patio & Pool Decks', description: 'Beautiful outdoor spaces perfect for relaxation and entertainment.' },
    { title: 'Concrete Repair & Maintenance', description: 'Professional repair services to restore and maintain your concrete.' },
    { title: 'Concrete Retaining Walls', description: 'Functional and attractive walls that prevent erosion and add structure.' },
    { title: 'Concrete Sealing', description: 'Protective treatments that extend the life of your concrete surfaces.' },
    { title: 'Concrete Staining', description: 'Decorative finishes that transform plain concrete into works of art.' },
    { title: 'Decorative Concrete', description: 'Custom artistic concrete solutions that make a statement.' },
    { title: 'Stamped Concrete', description: 'Textured concrete that mimics natural materials like stone or brick.' }
  ]
  
  return (
    <section id="services" className="section-padding bg-concrete-dark">
      <div className="container-custom">
        <div ref={ref} className={`text-center mb-16 ${inView ? 'animate-fade-in' : 'opacity-0'}`}>
          <Heading level={2} className="mb-6">
            Our <span className="text-neon-cyan">Services</span>
          </Heading>
          <p className="text-xl text-concrete-grey max-w-3xl mx-auto">
            From residential driveways to commercial foundations, we deliver exceptional concrete solutions with precision and craftsmanship.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection