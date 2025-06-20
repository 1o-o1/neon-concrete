import React from 'react'
import { useInView } from 'react-intersection-observer'
import Heading from '../atoms/Heading'

const WhyChooseUsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  })
  
  const features = [
    {
      title: 'Professionalism',
      description: 'Our team maintains the highest standards of professionalism in every project.'
    },
    {
      title: 'Quick Service Times',
      description: 'We understand deadlines matter and deliver projects on time, every time.'
    },
    {
      title: 'Attention to Detail',
      description: 'Every project receives meticulous attention to ensure perfect results.'
    },
    {
      title: 'Full Project Coordination',
      description: 'From planning to completion, we handle all aspects of your concrete project.'
    }
  ]
  
  return (
    <section className="section-padding bg-concrete-dark">
      <div className="container-custom">
        <div ref={ref} className={`${inView ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="text-center mb-16">
            <Heading level={2} className="mb-6">
              From Start to <span className="text-neon-cyan">Finish</span>
            </Heading>
            <p className="text-xl text-concrete-grey max-w-4xl mx-auto leading-relaxed">
              Neon Concrete Construction LLC is a leading concrete service provider serving the North Texas area. 
              With over 20 years of experience, we specialize in residential and commercial projects. Our team is known for our 
              professionalism, quick service times, and attention to detail, making us a trusted choice for all concrete needs. 
              From coordinating projects to handling bureaucratic oversight, we ensure a seamless experience for our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`text-center ${inView ? 'animate-fade-in' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-neon-cyan/20 border-2 border-neon-cyan rounded-full flex items-center justify-center mx-auto">
                    <div className="w-8 h-8 bg-neon-cyan rounded-full"></div>
                  </div>
                </div>
                <h3 className="text-xl font-heading font-semibold text-concrete-light mb-4">
                  {feature.title}
                </h3>
                <p className="text-concrete-grey">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUsSection