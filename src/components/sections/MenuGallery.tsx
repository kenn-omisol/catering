'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import OptimizedImage from '@/components/ui/OptimizedImage'
import { ChefHat, Leaf, Utensils, Wine } from 'lucide-react'

const categories = [
  { id: 'all', label: 'All Items', icon: Utensils },
  { id: 'appetizers', label: 'Appetizers', icon: Wine },
  { id: 'mains', label: 'Main Courses', icon: ChefHat },
  { id: 'desserts', label: 'Desserts', icon: Utensils },
  { id: 'vegetarian', label: 'Vegetarian', icon: Leaf }
]

// Reliable fallback images for menu items
const getFallbackImage = (category: string) => {
  const fallbacks = {
    mains: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    appetizers: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    desserts: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    vegetarian: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  }
  return fallbacks[category as keyof typeof fallbacks] || fallbacks.mains
}

const menuItems = [
  {
    id: 1,
    title: "Grilled Salmon with Herb Butter",
    description: "Fresh Atlantic salmon with seasonal vegetables and lemon herb butter sauce",
    category: "mains",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    dietary: ["gluten-free"],
    price: "$28"
  },
  {
    id: 2,
    title: "Artisanal Cheese & Charcuterie",
    description: "Selection of premium cheeses, cured meats, and artisanal accompaniments",
    category: "appetizers",
    image: "https://images.unsplash.com/photo-1564671165093-20688ff1fffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    dietary: [],
    price: "$18"
  },
  {
    id: 3,
    title: "Chocolate Lava Cake",
    description: "Warm chocolate cake with molten center, vanilla ice cream and berry compote",
    category: "desserts",
    image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    dietary: ["vegetarian"],
    price: "$12"
  },
  {
    id: 4,
    title: "Mediterranean Vegetable Stack",
    description: "Grilled zucchini, eggplant, and bell peppers with herbed goat cheese",
    category: "vegetarian",
    image: "https://images.unsplash.com/photo-1576402794548-ca036f57bdbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    dietary: ["vegetarian", "gluten-free"],
    price: "$22"
  },
  {
    id: 5,
    title: "Beef Tenderloin Wellington",
    description: "Prime beef tenderloin wrapped in puff pastry with mushroom duxelles",
    category: "mains",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    dietary: [],
    price: "$42"
  },
  {
    id: 6,
    title: "Stuffed Mushroom Caps",
    description: "Button mushrooms filled with herb breadcrumbs and parmesan cheese",
    category: "appetizers",
    image: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    dietary: ["vegetarian"],
    price: "$14"
  },
  {
    id: 7,
    title: "Lemon Tart with Meringue",
    description: "Classic French lemon tart with torched meringue and candied lemon zest",
    category: "desserts",
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    dietary: ["vegetarian"],
    price: "$10"
  },
  {
    id: 8,
    title: "Quinoa Power Bowl",
    description: "Superfood quinoa with roasted vegetables, avocado, and tahini dressing",
    category: "vegetarian",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    dietary: ["vegetarian", "vegan", "gluten-free"],
    price: "$19"
  }
]

export default function MenuGallery() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)

  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory)

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-secondary-100 rounded-full px-4 py-2 mb-6">
            <ChefHat className="w-4 h-4 text-secondary-600" />
            <span className="text-sm font-medium text-secondary-700">Our Menu</span>
          </div>
          
          <h2 className="text-h1 text-gray-900 mb-6">
            Culinary Excellence in
            <span className="block text-secondary-600">Every Dish</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our carefully crafted menu featuring fresh, seasonal ingredients 
            and innovative flavors that will delight your guests.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-primary-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-4 h-4" />
                {category.label}
              </motion.button>
            )
          })}
        </motion.div>

        {/* Menu Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-transparent"
                onHoverStart={() => setHoveredItem(item.id)}
                onHoverEnd={() => setHoveredItem(null)}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <OptimizedImage
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    quality={85}
                    fallbackSrc={getFallbackImage(item.category)}
                  />
                  
                  {/* Price Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="font-semibold text-primary-600">{item.price}</span>
                  </div>
                  
                  {/* Dietary Icons */}
                  {item.dietary.length > 0 && (
                    <div className="absolute top-4 left-4 flex gap-1">
                      {item.dietary.includes('vegetarian') && (
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                          <Leaf className="w-3 h-3 text-white" />
                        </div>
                      )}
                      {item.dietary.includes('gluten-free') && (
                        <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                          GF
                        </div>
                      )}
                      {item.dietary.includes('vegan') && (
                        <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                          V
                        </div>
                      )}
                    </div>
                  )}

                  {/* Hover Overlay */}
                  <AnimatePresence>
                    {hoveredItem === item.id && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/60 flex items-center justify-center"
                      >
                        <motion.button
                          initial={{ scale: 0.8 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0.8 }}
                          className="bg-white text-primary-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
                        >
                          View Details
                        </motion.button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
            <h3 className="text-h2 text-gray-900 mb-4">Custom Menu Design</h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Don&apos;t see exactly what you&apos;re looking for? We specialize in creating custom menus 
              tailored to your event, dietary requirements, and budget.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#contact"
                className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors inline-flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChefHat className="w-5 h-5" />
                Request Custom Menu
              </motion.a>
              
              <motion.a
                href="/menu.pdf"
                target="_blank"
                className="bg-white border border-gray-300 hover:border-primary-300 text-gray-700 hover:text-primary-600 px-8 py-4 rounded-xl font-semibold text-lg transition-colors inline-flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Full Menu
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
