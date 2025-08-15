'use client'

import { motion } from 'framer-motion'
import { 
  UtensilsCrossed, 
  Calendar, 
  Truck, 
  ChefHat, 
  Heart, 
  Building, 
  PartyPopper,
  ArrowRight 
} from 'lucide-react'

const services = [
  {
    icon: UtensilsCrossed,
    title: "Corporate Catering",
    description: "Professional lunch meetings, conferences, and company events with executive-level presentation.",
    features: ["Breakfast & lunch options", "Meeting room setup", "Dietary accommodations", "Professional service"],
    color: "primary"
  },
  {
    icon: Heart,
    title: "Wedding Catering",
    description: "Make your special day unforgettable with our romantic and elegant wedding catering services.",
    features: ["Custom menu design", "Cocktail hour service", "Elegant presentation", "Cake cutting service"],
    color: "secondary"
  },
  {
    icon: PartyPopper,
    title: "Social Events",
    description: "Birthday parties, anniversaries, and celebrations that bring people together around great food.",
    features: ["Party planning assistance", "Themed decorations", "Entertainment coordination", "Full bar service"],
    color: "accent"
  },
  {
    icon: Calendar,
    title: "Holiday Catering",
    description: "Seasonal celebrations and holiday gatherings with traditional and contemporary menu options.",
    features: ["Seasonal specialties", "Traditional favorites", "Family-style service", "Holiday decorations"],
    color: "primary"
  },
  {
    icon: Building,
    title: "Event Venues",
    description: "Complete venue management with full catering services for any size gathering.",
    features: ["Venue coordination", "Setup & breakdown", "Audio/visual support", "Event planning"],
    color: "secondary"
  },
  {
    icon: Truck,
    title: "Delivery & Setup",
    description: "Professional delivery and complete event setup so you can focus on your guests.",
    features: ["Timely delivery", "Complete setup", "Serving equipment", "Cleanup service"],
    color: "accent"
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const
    }
  }
}

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white">
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
            <ChefHat className="w-4 h-4 text-primary-600" />
            <span className="text-sm font-medium text-primary-700">Our Services</span>
          </div>
          
          <h2 className="text-h1 text-gray-900 mb-6">
            Comprehensive Catering Solutions for
            <span className="block text-primary-600">Every Occasion</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From intimate gatherings to large-scale events, we provide complete catering services 
            with attention to detail, exceptional quality, and personalized service.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon
            const colorMap = {
              primary: {
                iconBg: 'bg-primary-500',
                border: 'border-primary-200',
                accent: 'text-primary-600'
              },
              secondary: {
                iconBg: 'bg-secondary-500',
                border: 'border-secondary-200',
                accent: 'text-secondary-600'
              },
              accent: {
                iconBg: 'bg-accent-500',
                border: 'border-accent-200',
                accent: 'text-accent-600'
              }
            } as const
            
            const colorClasses = colorMap[service.color as keyof typeof colorMap] || colorMap.primary

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border ${colorClasses.border} hover:border-transparent hover:-translate-y-2`}
              >
                {/* Icon */}
                <div className={`w-16 h-16 ${colorClasses.iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-h3 text-gray-900 mb-4 group-hover:text-gray-700 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3 text-sm text-gray-600">
                      <div className={`w-2 h-2 rounded-full ${colorClasses.iconBg}`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <motion.button
                  className={`group/btn flex items-center gap-2 ${colorClasses.accent} font-semibold text-sm hover:gap-3 transition-all duration-300`}
                  whileHover={{ x: 5 }}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </motion.button>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-h2 mb-4">Ready to Start Planning?</h3>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Let&apos;s discuss your vision and create a custom catering package that exceeds your expectations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#contact"
                className="bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Calendar className="w-5 h-5" />
                Schedule Consultation
              </motion.a>
              
              <motion.a
                href="tel:+1234567890"
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-colors inline-flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>(555) 123-4567</span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
