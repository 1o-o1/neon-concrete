import React from 'react'
import { useInView } from 'react-intersection-observer'
import Heading from '../atoms/Heading'

const AboutSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  })
  
  return (
    <section id="about" className="section-padding bg-concrete-medium">
      <div className="container-custom">
        <div ref={ref} className={`${inView ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Heading level={2} className="mb-8">
                About <span className="text-neon-cyan">Neon Concrete</span>
              </Heading>
              <div className="space-y-6 text-lg text-concrete-grey leading-relaxed">
                <p>
                  Neon Concrete is a premier concrete contractor serving Northeast Texas with over 20 years of experience. We specialize in residential and commercial concrete services, including new foundations, driveways, patios, foundation repair, concrete repair, and more.
                </p>
                <p>
                  Our team delivers exceptional work with a focus on communication, quick service, and attention to detail. As a local, Native Texan business, we offer competitive pricing and outstanding customer service.
                </p>
                <p className="text-neon-cyan font-semibold">
                  Trust us for all your concrete needs.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-concrete-dark p-8 border-l-4 border-neon-cyan">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-neon-cyan rounded-full flex items-center justify-center">
                      <span className="text-concrete-dark font-bold text-xl">20+</span>
                    </div>
                    <span className="text-concrete-light font-semibold">Years of Experience</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-neon-cyan rounded-full flex items-center justify-center">
                      <span className="text-concrete-dark font-bold text-xl">✓</span>
                    </div>
                    <span className="text-concrete-light font-semibold">Local Native Texan Business</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-neon-cyan rounded-full flex items-center justify-center">
                      <span className="text-concrete-dark font-bold text-xl">★</span>
                    </div>
                    <span className="text-concrete-light font-semibold">Outstanding Customer Service</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection