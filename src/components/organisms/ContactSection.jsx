import React from 'react'
import { useInView } from 'react-intersection-observer'
import Heading from '../atoms/Heading'
import ContactForm from '../molecules/ContactForm'
import Icon from '../atoms/Icon'

const ContactSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  })
  
  const businessHours = [
    { day: 'Monday - Thursday', hours: '6:00 AM – 6:00 PM' },
    { day: 'Friday', hours: '7:00 AM – 5:00 PM' },
    { day: 'Saturday', hours: '9:00 AM – 3:00 PM' },
    { day: 'Sunday', hours: 'Closed' }
  ]
  
  return (
    <section id="contact" className="section-padding bg-concrete-medium">
      <div className="container-custom">
        <div ref={ref} className={`${inView ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="text-center mb-16">
            <Heading level={2} className="mb-6">
              Contact Us Today for a <span className="text-neon-cyan">Free Estimate!</span>
            </Heading>
            <p className="text-xl text-concrete-grey max-w-3xl mx-auto">
              Ready to start your concrete project? Get in touch with our team for a personalized consultation and free estimate.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-heading font-semibold text-concrete-light mb-6">
                  Get In Touch
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Icon name="location" className="text-neon-cyan" size={24} />
                    <span className="text-concrete-grey">Serving North Texas (Dallas-Fort Worth and nearby)</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Icon name="phone" className="text-neon-cyan" size={24} />
                    <a 
                      href="tel:469-480-6870" 
                      className="text-concrete-grey hover:text-neon-cyan transition-colors duration-300"
                    >
                      Call Us: 469-480-6870
                    </a>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Icon name="email" className="text-neon-cyan" size={24} />
                    <a 
                      href="mailto:neonconcrete@gmail.com" 
                      className="text-concrete-grey hover:text-neon-cyan transition-colors duration-300"
                    >
                      neonconcrete@gmail.com
                    </a>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-heading font-semibold text-concrete-light mb-6">
                  Business Hours
                </h3>
                
                <div className="space-y-3">
                  {businessHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-concrete-grey/30">
                      <span className="text-concrete-light font-medium">{schedule.day}</span>
                      <span className="text-concrete-grey">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-concrete-dark p-8 border border-concrete-grey">
              <h3 className="text-2xl font-heading font-semibold text-concrete-light mb-6">
                Request Your Free Estimate
              </h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection