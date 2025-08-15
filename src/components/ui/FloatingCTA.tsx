'use client'

import { useState, useEffect } from 'react'
import { Phone, MessageCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const shouldShow = scrollY > 300
      setIsVisible(shouldShow)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          className="fixed bottom-6 left-6 right-6 z-50 md:left-auto md:right-6 md:w-auto"
        >
          <div className="glass bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-white/20">
            <div className="flex items-center justify-between gap-4">
              <div className="hidden md:block">
                <p className="text-sm font-medium text-gray-900">Ready to plan your event?</p>
                <p className="text-xs text-gray-600">Get your custom quote today</p>
              </div>
              
              <div className="flex gap-3 w-full md:w-auto">
                <motion.a
                  href="tel:+1234567890"
                  className="flex-1 md:flex-none bg-primary-500 hover:bg-primary-600 text-white px-4 py-3 rounded-xl font-medium text-sm flex items-center justify-center gap-2 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone size={16} />
                  <span className="md:hidden">Call</span>
                  <span className="hidden md:inline">Call Now</span>
                </motion.a>
                
                <motion.a
                  href="#contact"
                  className="flex-1 md:flex-none bg-secondary-500 hover:bg-secondary-600 text-white px-4 py-3 rounded-xl font-medium text-sm flex items-center justify-center gap-2 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <MessageCircle size={16} />
                  <span className="md:hidden">Quote</span>
                  <span className="hidden md:inline">Get Quote</span>
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
