'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle,
  Send,
  CheckCircle
} from 'lucide-react'

const contactFormSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  eventType: z.string().min(1, "Please select an event type"),
  eventDate: z.string().min(1, "Please select an event date"),
  guestCount: z.string().min(1, "Please enter the number of guests"),
  budget: z.string().min(1, "Please select a budget range"),
  location: z.string().min(5, "Please enter the event location"),
  message: z.string().min(10, "Please provide more details about your event")
})

type ContactFormData = z.infer<typeof contactFormSchema>

const eventTypes = [
  "Wedding Reception",
  "Corporate Event",
  "Birthday Party",
  "Anniversary",
  "Holiday Party",
  "Business Meeting",
  "Social Gathering",
  "Other"
]

const budgetRanges = [
  "Under $1,000",
  "$1,000 - $2,500",
  "$2,500 - $5,000",
  "$5,000 - $10,000",
  "$10,000 - $20,000",
  "Over $20,000"
]

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema)
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    console.log('Form data:', data)
    setIsSubmitted(true)
    setIsSubmitting(false)
    reset()
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary-100 rounded-full px-4 py-2 mb-6">
            <MessageCircle className="w-4 h-4 text-primary-600" />
            <span className="text-sm font-medium text-primary-700">Get In Touch</span>
          </div>
          
          <h2 className="text-h1 text-gray-900 mb-6">
            Let&apos;s Plan Your Perfect
            <span className="block text-primary-600">Event Together</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to create an unforgettable culinary experience? Contact us today 
            for a personalized consultation and custom quote.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-8"
          >
            {/* Quick Contact */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-h3 text-gray-900 mb-6">Quick Contact</h3>
              
              <div className="space-y-6">
                <motion.a
                  href="tel:+1234567890"
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-primary-50 transition-colors group"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">(555) 123-4567</div>
                    <div className="text-sm text-gray-600">Call us directly</div>
                  </div>
                </motion.a>

                <motion.a
                  href="mailto:hello@cateringcompany.com"
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-secondary-50 transition-colors group"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-12 h-12 bg-secondary-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">hello@cateringco.com</div>
                    <div className="text-sm text-gray-600">Send us an email</div>
                  </div>
                </motion.a>

                <div className="flex items-center gap-4 p-4">
                  <div className="w-12 h-12 bg-accent-500 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">123 Culinary Way</div>
                    <div className="text-sm text-gray-600">Downtown, City 12345</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-h3 text-gray-900 mb-6 flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary-500" />
                Business Hours
              </h3>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday - Friday</span>
                  <span className="font-semibold text-gray-900">8:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Saturday</span>
                  <span className="font-semibold text-gray-900">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sunday</span>
                  <span className="font-semibold text-gray-900">10:00 AM - 4:00 PM</span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-primary-50 rounded-xl">
                <p className="text-sm text-primary-700">
                  <strong>Emergency Catering:</strong> Available 24/7 for urgent events
                </p>
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-semibold mb-4">Quick Response Guarantee</h3>
              <p className="mb-4">We respond to all inquiries within:</p>
              <div className="text-3xl font-bold mb-2">2 Hours</div>
              <p className="text-white/80 text-sm">During business hours</p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              {/* Success Message */}
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-8 p-6 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3"
                >
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <div>
                    <h4 className="font-semibold text-green-800">Thank you for your inquiry!</h4>
                    <p className="text-green-700">We&apos;ll be in touch within 2 hours to discuss your event.</p>
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Personal Information */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      {...register('firstName')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="Your first name"
                    />
                    {errors.firstName && (
                      <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      {...register('lastName')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="Your last name"
                    />
                    {errors.lastName && (
                      <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>
                    )}
                  </div>
                </div>

                {/* Contact Information */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      {...register('email')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      {...register('phone')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="(555) 123-4567"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                    )}
                  </div>
                </div>

                {/* Event Details */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Event Type *
                    </label>
                    <select
                      {...register('eventType')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Select event type</option>
                      {eventTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                    {errors.eventType && (
                      <p className="mt-1 text-sm text-red-600">{errors.eventType.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Event Date *
                    </label>
                    <input
                      type="date"
                      {...register('eventDate')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    />
                    {errors.eventDate && (
                      <p className="mt-1 text-sm text-red-600">{errors.eventDate.message}</p>
                    )}
                  </div>
                </div>

                {/* Guest Count and Budget */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Number of Guests *
                    </label>
                    <input
                      type="number"
                      {...register('guestCount')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="50"
                      min="1"
                    />
                    {errors.guestCount && (
                      <p className="mt-1 text-sm text-red-600">{errors.guestCount.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Budget Range *
                    </label>
                    <select
                      {...register('budget')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range}>{range}</option>
                      ))}
                    </select>
                    {errors.budget && (
                      <p className="mt-1 text-sm text-red-600">{errors.budget.message}</p>
                    )}
                  </div>
                </div>

                {/* Event Location */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Event Location *
                  </label>
                  <input
                    type="text"
                    {...register('location')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    placeholder="Venue name or address"
                  />
                  {errors.location && (
                    <p className="mt-1 text-sm text-red-600">{errors.location.message}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Details *
                  </label>
                  <textarea
                    {...register('message')}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Tell us more about your vision, dietary requirements, style preferences, or any special requests..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending Request...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Get Your Custom Quote
                    </>
                  )}
                </motion.button>

                <p className="text-sm text-gray-600 text-center">
                  By submitting this form, you agree to be contacted about your catering needs. 
                  We respect your privacy and will never share your information.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
