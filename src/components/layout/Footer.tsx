'use client'

import { motion } from 'framer-motion'
import { 
  ChefHat, 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin,
  Clock,
  Star,
  Award,
  Heart
} from 'lucide-react'
import Link from 'next/link'

const quickLinks = [
  { name: 'Services', href: '#services' },
  { name: 'Menu Gallery', href: '#menu' },
  { name: 'About Us', href: '#about' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' }
]

const services = [
  { name: 'Wedding Catering', href: '#services' },
  { name: 'Corporate Events', href: '#services' },
  { name: 'Private Parties', href: '#services' },
  { name: 'Holiday Catering', href: '#services' },
  { name: 'Event Planning', href: '#services' }
]

const socialLinks = [
  { name: 'Facebook', href: '#', icon: Facebook },
  { name: 'Instagram', href: '#', icon: Instagram },
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'LinkedIn', href: '#', icon: Linkedin }
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            {/* Logo */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                <ChefHat className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Gourmet Catering Co.</h3>
                <p className="text-sm text-gray-400">Exceptional Events</p>
              </div>
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Creating unforgettable culinary experiences for over 15 years. 
              From intimate gatherings to grand celebrations, we bring passion 
              and expertise to every event.
            </p>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center">
                <div className="flex justify-center mb-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                </div>
                <p className="text-xs text-gray-400">4.9/5 Rating</p>
              </div>
              <div className="text-center">
                <Award className="w-5 h-5 text-primary-400 mx-auto mb-1" />
                <p className="text-xs text-gray-400">Award Winner</p>
              </div>
              <div className="text-center">
                <Heart className="w-5 h-5 text-secondary-400 mx-auto mb-1" />
                <p className="text-xs text-gray-400">500+ Events</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 hover:bg-primary-500 rounded-xl flex items-center justify-center transition-colors"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-primary-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-gray-300 hover:text-secondary-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-secondary-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Business Hours */}
            <div className="mt-8">
              <h5 className="font-semibold mb-4 flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary-400" />
                Business Hours
              </h5>
              <div className="space-y-2 text-sm text-gray-300">
                <div className="flex justify-between">
                  <span>Mon - Fri</span>
                  <span>8 AM - 8 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>9 AM - 6 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>10 AM - 4 PM</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Get In Touch</h4>
            
            <div className="space-y-4">
              <motion.a
                href="tel:+1234567890"
                className="flex items-center gap-3 text-gray-300 hover:text-primary-400 transition-colors group"
                whileHover={{ x: 5 }}
              >
                <div className="w-10 h-10 bg-gray-800 group-hover:bg-primary-500 rounded-xl flex items-center justify-center transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium">(555) 123-4567</p>
                  <p className="text-sm text-gray-400">Call us directly</p>
                </div>
              </motion.a>

              <motion.a
                href="mailto:hello@cateringcompany.com"
                className="flex items-center gap-3 text-gray-300 hover:text-secondary-400 transition-colors group"
                whileHover={{ x: 5 }}
              >
                <div className="w-10 h-10 bg-gray-800 group-hover:bg-secondary-500 rounded-xl flex items-center justify-center transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium">hello@cateringco.com</p>
                  <p className="text-sm text-gray-400">Send us an email</p>
                </div>
              </motion.a>

              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium">123 Culinary Way</p>
                  <p className="text-sm text-gray-400">Downtown, City 12345</p>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="mt-6 p-4 bg-gray-800 rounded-xl">
              <p className="text-sm font-medium text-primary-400 mb-1">24/7 Emergency Catering</p>
              <p className="text-xs text-gray-400">Available for urgent events</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400">
              © {currentYear} Gourmet Catering Co. All rights reserved.
            </div>
            
            <div className="flex gap-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-primary-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-primary-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="hover:text-primary-400 transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
