'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import Head from 'next/head'
import { semanticColors } from '../styles/colors'

const heroImages = [
  '/images/exterior/1.jpg',
  '/images/exterior/2.jpg',
  '/images/exterior/3.jpg',
  '/images/exterior/4.jpg',
  '/images/exterior/5.jpg',
  '/images/exterior/6.jpg',
  '/images/exterior/8.jpg',
  '/images/exterior/10.jpg',
  '/images/exterior/11.jpg',
  '/images/exterior/12.jpg'
]

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000) // Change image every 5 seconds
    
    return () => clearInterval(interval)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="hero-section relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Slideshow - GPU optimized */}
      <div className="absolute inset-0 animate-gpu">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`image-container absolute inset-0 transition-opacity duration-2000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ willChange: index === currentImageIndex ? 'opacity' : 'auto' }}
          >
            <Image
              src={image}
              alt={`Gates of Ocean Ridge - View ${index + 1}`}
              fill
              priority={index === 0} // LCP optimization
              quality={index === 0 ? 60 : 50} // Desktop optimized compression
              sizes="100vw"
              style={{
                objectFit: 'cover',
                objectPosition: 'center'
              }}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyejFhiTCsrDkJBALl5UUKVW3QMvFjpjUtSzNNCATwtWgAAAAA=="
            />
            <div 
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4))'
              }}
            />
          </div>
        ))}
      </div>
      

      
      {/* Minimal Content */}
      <div className="relative z-10 text-center text-white px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 style={{ 
            fontSize: 'clamp(2.5rem, 8vw, 5rem)',
            fontWeight: '200',
            letterSpacing: '0.02em',
            lineHeight: '1.1',
            marginBottom: '1.5rem'
          }}>
            The Gates of<br />Ocean Ridge
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p style={{ 
            fontSize: '1.125rem',
            fontWeight: '300',
            opacity: 0.9,
            marginBottom: '0.5rem'
          }}>
            Ocean Ridge, Towel Isle St. Mary
          </p>
          <p style={{ 
            fontSize: '1rem',
            fontWeight: '300',
            opacity: 0.8,
            marginBottom: '3rem'
          }}>
            A Luxury GREEN Community
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '2px',
            padding: '0.75rem 2rem',
            display: 'inline-block',
            fontSize: '0.875rem',
            fontWeight: '400',
            letterSpacing: '0.1em',
            textTransform: 'uppercase'
          }}
        >
          Coming Soon 2026
        </motion.div>
      </div>
      
      {/* Minimal Indicators */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            aria-label={`View image ${index + 1} of ${heroImages.length}`}
            style={{
              width: '2px',
              height: index === currentImageIndex ? '32px' : '16px',
              backgroundColor: 'white',
              opacity: index === currentImageIndex ? 1 : 0.4,
              transition: 'all 0.3s ease',
              border: 'none',
              cursor: 'pointer'
            }}
          />
        ))}
      </div>
      
      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        onClick={() => scrollToSection('about')}
        aria-label="Learn more about Gates of Ocean Ridge development"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white opacity-60 hover:opacity-100 transition-opacity"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <ChevronDown size={20} strokeWidth={1} />
        </motion.div>
      </motion.button>
    </section>
  )
}