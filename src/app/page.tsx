import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'

// Ultra-aggressive dynamic imports to reduce TBT and bundle size
// Only load components when they're about to enter viewport
const About = dynamic(() => import('@/components/About'), {
  loading: () => <div className="animate-pulse bg-gray-100" style={{ height: '400px' }} />
})

// Heavy component - load only when needed with optimized loading
const CreativeGallery = dynamic(() => import('@/components/CreativeGallery'), {
  loading: () => <div className="animate-pulse bg-gray-100" style={{ height: '600px' }} />
})

const Amenities = dynamic(() => import('@/components/Amenities'), {
  loading: () => <div className="animate-pulse bg-gray-100" style={{ height: '400px' }} />
})

const Units = dynamic(() => import('@/components/Units'), {
  loading: () => <div className="animate-pulse bg-gray-100" style={{ height: '400px' }} />
})

const Location = dynamic(() => import('@/components/Location'), {
  loading: () => <div className="animate-pulse bg-gray-100" style={{ height: '400px' }} />
})

const Contact = dynamic(() => import('@/components/Contact'), {
  loading: () => <div className="animate-pulse bg-gray-100" style={{ height: '300px' }} />
})

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      {/* Render components with optimized loading to reduce TBT */}
      <About />
      <CreativeGallery />
      <Amenities />
      <Units />
      <Location />
      <Contact />
    </main>
  )
}
