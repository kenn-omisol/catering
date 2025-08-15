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
  'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2874&q=80',
]

// Secondary images to preload after critical content
const secondaryImages = [
  'https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1530610476181-d83430b64dcd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
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