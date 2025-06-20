import React, { useState } from 'react'
import Input from '../atoms/Input'
import Label from '../atoms/Label'
import Button from '../atoms/Button'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({ name: '', email: '', phone: '', message: '' })
    alert('Thank you for your message! We\'ll get back to you soon.')
  }
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Label htmlFor="name">Name *</Label>
        <Input
          type="text"
          name="name"
          placeholder="Your full name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      
      <div>
        <Label htmlFor="email">Email *</Label>
        <Input
          type="email"
          name="email"
          placeholder="your.email@example.com"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      
      <div>
        <Label htmlFor="phone">Phone</Label>
        <Input
          type="tel"
          name="phone"
          placeholder="(555) 123-4567"
          value={formData.phone}
          onChange={handleChange}
        />
      </div>
      
      <div>
        <Label htmlFor="message">Message *</Label>
        <textarea
          name="message"
          placeholder="Tell us about your project..."
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          className="w-full px-4 py-3 bg-concrete-medium border border-concrete-grey text-concrete-light placeholder-concrete-grey focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-colors duration-300 resize-vertical"
        />
      </div>
      
      <Button type="submit" size="lg" className="w-full">
        Send Message
      </Button>
    </form>
  )
}

export default ContactForm
