'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, Quote, ChevronLeft, ChevronRight, Heart } from 'lucide-react'
import OptimizedImage from '@/components/ui/OptimizedImage'

const testimonials = [
  {
    id: 1,
    name: "Sarah & Michael Chen",
    event: "Wedding Reception",
    date: "October 2024",
    rating: 5,
    text: "Absolutely phenomenal! The food was beyond our expectations and the presentation was stunning. Our guests are still talking about the incredible flavors and beautiful setup. The team went above and beyond to make our special day perfect.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    eventSize: "150 guests"
  },
  {
    id: 2,
    name: "Jennifer Martinez",
    event: "Corporate Event",
    date: "September 2024",
    rating: 5,
    text: "We've used many catering services for our corporate events, but this team stands out. Professional, punctual, and the food quality is consistently excellent. They handled our dietary restrictions with ease and creativity.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b02c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    eventSize: "75 guests"
  },
  {
    id: 3,
    name: "Robert Thompson",
    event: "60th Birthday Party",
    date: "August 2024",
    rating: 5,
    text: "From the initial consultation to the final cleanup, everything was handled with such care and attention to detail. The custom menu they created perfectly reflected my father's favorite flavors. It was truly a celebration to remember.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    eventSize: "40 guests"
  },
  {
    id: 4,
    name: "Amanda & David Wilson",
    event: "Anniversary Celebration",
    date: "July 2024",
    rating: 5,
    text: "Twenty-five years of marriage deserved something special, and they delivered beyond our wildest dreams. The intimate setting, exquisite cuisine, and flawless service made our anniversary unforgettable. Highly recommend!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    eventSize: "30 guests"
  },
  {
    id: 5,
    name: "Tech Solutions Inc.",
    event: "Annual Company Retreat",
    date: "June 2024",
    rating: 5,
    text: "Outstanding service for our three-day retreat. They adapted to our changing schedule, accommodated various dietary needs, and kept our team well-fed and energized. The breakfast spreads were particularly impressive!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    eventSize: "120 guests"
  }
]

const platformReviews = [
  { platform: "Google", rating: 4.9, reviews: 127, logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/google.svg" },
  { platform: "Yelp", rating: 4.8, reviews: 89, logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/yelp.svg" },
  { platform: "Facebook", rating: 4.9, reviews: 156, logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/facebook.svg" },
  { platform: "Wedding Wire", rating: 5.0, reviews: 45, logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/weddingwire.svg" }
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-advance testimonials
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-yellow-100 rounded-full px-4 py-2 mb-6">
            <Star className="w-4 h-4 text-yellow-600" />
            <span className="text-sm font-medium text-yellow-700">Client Reviews</span>
          </div>
          
          <h2 className="text-h1 text-gray-900 mb-6">
            What Our Clients Say About
            <span className="block text-primary-600">Their Experience</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don&apos;t just take our word for it. Here&apos;s what our clients have to say about 
            their catering experience with us.
          </p>
        </motion.div>

        {/* Platform Reviews */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {platformReviews.map((platform, index) => (
            <div key={index} className="text-center">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="text-3xl font-bold text-gray-900 mb-1">{platform.rating}</div>
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < Math.floor(platform.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                <div className="text-sm text-gray-600">{platform.reviews} reviews</div>
                <div className="text-xs text-gray-500 mt-1">{platform.platform}</div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Main Testimonial Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-2xl overflow-hidden"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="grid md:grid-cols-2 gap-8 p-8 md:p-12"
              >
                {/* Content */}
                <div className="flex flex-col justify-center">
                  {/* Quote Icon */}
                  <Quote className="w-12 h-12 text-primary-200 mb-6" />
                  
                  {/* Rating */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  {/* Testimonial Text */}
                  <blockquote className="text-xl text-gray-700 leading-relaxed mb-8">
                    &quot;{currentTestimonial.text}&quot;
                  </blockquote>
                  
                  {/* Client Info */}
                  <div className="border-t pt-6">
                    <div className="font-semibold text-gray-900 mb-1">
                      {currentTestimonial.name}
                    </div>
                    <div className="text-primary-600 font-medium mb-2">
                      {currentTestimonial.event}
                    </div>
                    <div className="flex gap-4 text-sm text-gray-500">
                      <span>{currentTestimonial.date}</span>
                      <span>•</span>
                      <span>{currentTestimonial.eventSize}</span>
                    </div>
                  </div>
                </div>
                
                {/* Image */}
                <div className="relative h-80 md:h-full rounded-2xl overflow-hidden">
                  <OptimizedImage
                    src={currentTestimonial.image}
                    alt={currentTestimonial.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    quality={85}
                    fallbackSrc="/placeholder-person.svg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            {/* Previous Button */}
            <motion.button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-gray-600 hover:text-primary-600 hover:bg-primary-50 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index)
                    setIsAutoPlaying(false)
                  }}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-primary-500' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            {/* Next Button */}
            <motion.button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-gray-600 hover:text-primary-600 hover:bg-primary-50 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-3xl p-8 md:p-12 text-white">
            <Heart className="w-12 h-12 mx-auto mb-6 text-white/80" />
            <h3 className="text-h2 mb-4">Ready to Create Your Own Success Story?</h3>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who trusted us with their special moments. 
              Let&apos;s make your next event unforgettable.
            </p>
            
            <motion.a
              href="#contact"
              className="bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Heart className="w-5 h-5" />
              Start Planning Your Event
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
