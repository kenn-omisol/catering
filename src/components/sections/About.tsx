'use client'

import { motion } from 'framer-motion'
import OptimizedImage from '@/components/ui/OptimizedImage'
import { Award, Clock, Users, Heart, ChefHat, Star } from 'lucide-react'

const stats = [
  { icon: Users, number: '500+', label: 'Events Catered' },
  { icon: Clock, number: '15+', label: 'Years Experience' },
  { icon: Award, number: '25+', label: 'Awards Won' },
  { icon: Star, number: '4.9', label: 'Average Rating' }
]

const values = [
  {
    icon: Heart,
    title: 'Passion for Excellence',
    description: 'Every dish is crafted with love and attention to detail, ensuring an unforgettable culinary experience.'
  },
  {
    icon: Users,
    title: 'Client-Centered Service',
    description: 'We listen to your vision and work closely with you to bring your dream event to life.'
  },
  {
    icon: ChefHat,
    title: 'Culinary Innovation',
    description: 'Our chefs constantly create new flavors while respecting traditional cooking techniques.'
  },
  {
    icon: Award,
    title: 'Quality Commitment',
    description: 'We source the finest ingredients and maintain the highest standards in every aspect of our service.'
  }
]

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-accent-100 rounded-full px-4 py-2 mb-6">
              <Heart className="w-4 h-4 text-accent-600" />
              <span className="text-sm font-medium text-accent-700">Our Story</span>
            </div>
            
            <h2 className="text-h1 text-gray-900 mb-6">
              Crafting Memorable Experiences
              <span className="block text-accent-600">Since 2008</span>
            </h2>
            
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p className="text-lg">
                What started as a small family business has grown into one of the region&apos;s 
                most trusted catering companies. Our journey began with a simple belief: 
                great food brings people together and creates lasting memories.
              </p>
              
              <p>
                Today, our team of passionate chefs and service professionals continues 
                that tradition, combining time-honored techniques with innovative flavors 
                to create extraordinary culinary experiences for every occasion.
              </p>
              
              <p>
                From intimate dinner parties to grand celebrations, we approach each event 
                with the same dedication to excellence, attention to detail, and commitment 
                to exceeding our clients&apos; expectations.
              </p>
            </div>

            {/* CTA Button */}
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors mt-8"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Heart className="w-5 h-5" />
              Start Your Story With Us
            </motion.a>
          </motion.div>

          {/* Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {/* Large Image */}
            <div className="col-span-2 relative h-64 rounded-2xl overflow-hidden">
              <OptimizedImage
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
                alt="Professional catering team preparing elegant food presentation for events"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={85}
                fallbackSrc="https://images.unsplash.com/photo-1556909909-4ee6c9234e96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
              />
            </div>
            
            {/* Small Images */}
            <div className="relative h-32 rounded-2xl overflow-hidden">
              <OptimizedImage
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Professional catering kitchen with chefs preparing multiple dishes simultaneously"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
                quality={80}
                fallbackSrc="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              />
            </div>
            
            <div className="relative h-32 rounded-2xl overflow-hidden">
              <OptimizedImage
                src="https://images.unsplash.com/photo-1515125321754-301fb92a9518?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Elegant wedding reception catering setup with beautifully arranged tables and decorations"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
                quality={80}
                fallbackSrc="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              />
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-h2 text-gray-900 mb-6">Our Core Values</h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            These principles guide everything we do, from menu planning to event execution.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-10 h-10 text-white" />
                </div>
                
                <h4 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                  {value.title}
                </h4>
                
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-white text-center">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-h2 mb-6">Meet Our Executive Chef</h3>
              
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0">
                  <OptimizedImage
                    src="https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    alt="Professional Executive Chef Michael Anderson in chef whites"
                    width={128}
                    height={128}
                    className="object-cover w-full h-full"
                    quality={85}
                    fallbackSrc="https://images.unsplash.com/photo-1566492031773-4f4e44671d66?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  />
                </div>
                
                <div className="flex-1 text-left">
                  <h4 className="text-2xl font-semibold mb-2">Chef Michael Anderson</h4>
                  <p className="text-secondary-400 mb-4">Executive Chef & Founder</p>
                  <p className="text-gray-300 leading-relaxed">
                    &quot;With over 15 years in the culinary industry and training from Le Cordon Bleu, 
                    I&apos;m passionate about creating exceptional dining experiences that celebrate both 
                    innovation and tradition. Every event is an opportunity to tell a story through food.&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
