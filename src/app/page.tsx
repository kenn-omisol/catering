import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import MenuGallery from '@/components/sections/MenuGallery'
import About from '@/components/sections/About'
import Testimonials from '@/components/sections/Testimonials'
import Contact from '@/components/sections/Contact'
import FloatingCTA from '@/components/ui/FloatingCTA'
import ImagePreloader from '@/components/ui/ImagePreloader'

// Critical images to preload
const criticalImages = [
  '/images/hero-bg.svg',
]

// Secondary images to preload after critical content
const secondaryImages = [
  '/images/food-gallery-1.svg',
  '/images/kitchen-modern.svg',
  '/images/chef-portrait.svg',
  '/images/testimonial-couple.svg',
]

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Preload critical images */}
      <ImagePreloader images={criticalImages} priority />
      <ImagePreloader images={secondaryImages} />
      
      <Hero />
      <Services />
      <MenuGallery />
      <About />
      <Testimonials />
      <Contact />
      <FloatingCTA />
    </main>
  )
}