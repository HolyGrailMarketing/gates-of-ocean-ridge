'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { X, ChevronLeft, ChevronRight, Grid3x3, Image as ImageIcon } from 'lucide-react'
import Image from 'next/image'
import { semanticColors } from '../styles/colors'

const galleryImages = [
  {
    src: '/images/exterior/1.jpg',
    alt: 'Gates of Ocean Ridge Exterior View 1',
    category: 'Exterior'
  },
  {
    src: '/images/exterior/2.jpg',
    alt: 'Gates of Ocean Ridge Exterior View 2',
    category: 'Exterior'
  },
  {
    src: '/images/exterior/3.jpg',
    alt: 'Gates of Ocean Ridge Exterior View 3',
    category: 'Exterior'
  },
  {
    src: '/images/exterior/4.jpg',
    alt: 'Gates of Ocean Ridge Building Design',
    category: 'Exterior'
  },
  {
    src: '/images/exterior/5.jpg',
    alt: 'Gates of Ocean Ridge Architecture',
    category: 'Exterior'
  },
  {
    src: '/images/exterior/6.jpg',
    alt: 'Gates of Ocean Ridge Landscape',
    category: 'Exterior'
  },
  {
    src: '/images/exterior/8.jpg',
    alt: 'Gates of Ocean Ridge Modern Design',
    category: 'Exterior'
  },
  {
    src: '/images/exterior/10.jpg',
    alt: 'Gates of Ocean Ridge Complex View',
    category: 'Exterior'
  },
  {
    src: '/images/exterior/11.jpg',
    alt: 'Gates of Ocean Ridge Perspective',
    category: 'Exterior'
  },
  {
    src: '/images/exterior/12.jpg',
    alt: 'Gates of Ocean Ridge Final Design',
    category: 'Exterior'
  },
  {
    src: '/images/interiors/one-bedroom-living.jpg',
    alt: 'One Bedroom Living Room',
    category: 'One Bedroom'
  },
  {
    src: '/images/interiors/one-bedroom-bedroom.jpg',
    alt: 'One Bedroom Suite',
    category: 'One Bedroom'
  },
  {
    src: '/images/interiors/two-bedroom-living.jpg',
    alt: 'Two Bedroom Living Area',
    category: 'Two Bedroom'
  },
  {
    src: '/images/interiors/two-bedroom-bedroom.jpg',
    alt: 'Two Bedroom Master Suite',
    category: 'Two Bedroom'
  },
  {
    src: '/images/interiors/three-bedroom-living.jpg',
    alt: 'Three Bedroom Living Room',
    category: 'Three Bedroom'
  },
  {
    src: '/images/interiors/three-bedroom-bedroom.jpg',
    alt: 'Three Bedroom Master Suite',
    category: 'Three Bedroom'
  }
]

export default function CreativeGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [viewMode, setViewMode] = useState<'hero' | 'carousel' | 'grid'>('hero')
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Auto-advance for carousel mode
  useEffect(() => {
    if (isMobile && viewMode === 'carousel') {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % galleryImages.length)
      }, 4000)
      return () => clearInterval(interval)
    }
  }, [isMobile, viewMode])

  const openModal = (index: number) => {
    setSelectedImage(index)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1)
    }
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      setCurrentSlide((prev) => (prev + 1) % galleryImages.length)
    }
    if (isRightSwipe) {
      setCurrentSlide((prev) => prev === 0 ? galleryImages.length - 1 : prev - 1)
    }
  }

  return (
    <>
      <section id="gallery" style={{ backgroundColor: semanticColors.background.secondary, padding: 'clamp(3rem, 8vw, 5rem) 0' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: 'clamp(2.5rem, 6vw, 4rem)' }}
          >
            <h2 style={{ 
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: '200',
              color: semanticColors.text.primary,
              marginBottom: '1rem',
              letterSpacing: '0.02em'
            }}>
              Architectural Excellence
            </h2>
            <p style={{ 
              fontSize: '1.125rem',
              color: semanticColors.text.secondary,
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6',
              fontWeight: '300'
            }}>
              Discover the vision behind Ocean Ridge through our curated collection of architectural renderings
            </p>
          </motion.div>

          {isMobile ? (
            <div>
              {/* Mobile View Controls */}
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '0.5rem',
                marginBottom: '2rem'
              }}>
                {[
                  { mode: 'hero', icon: ImageIcon, label: 'Featured' },
                  { mode: 'carousel', icon: ChevronRight, label: 'Carousel' },
                  { mode: 'grid', icon: Grid3x3, label: 'Grid' }
                ].map(({ mode, icon: Icon, label }) => (
                  <motion.button
                    key={mode}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setViewMode(mode as any)}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '0.25rem',
                      padding: '0.75rem',
                      borderRadius: '12px',
                      border: 'none',
                      backgroundColor: viewMode === mode ? semanticColors.brand.primary : 'rgba(255, 255, 255, 0.8)',
                      color: viewMode === mode ? 'white' : semanticColors.text.secondary,
                      fontSize: '0.75rem',
                      fontWeight: '500',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      backdropFilter: 'blur(10px)'
                    }}
                  >
                    <Icon size={16} />
                    {label}
                  </motion.button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                {/* Hero View */}
                {viewMode === 'hero' && (
                  <motion.div
                    key="hero"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div style={{
                      position: 'relative',
                      height: '350px',
                      borderRadius: '20px',
                      overflow: 'hidden',
                      marginBottom: '1.5rem'
                    }}>
                      <Image
                        src={galleryImages[currentSlide].src}
                        alt={galleryImages[currentSlide].alt}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                        style={{
                          objectFit: 'cover'
                        }}
                        quality={50}
                        onClick={() => openModal(currentSlide)}
                      />
                      <div style={{
                        position: 'absolute',
                        bottom: '1rem',
                        left: '1rem',
                        right: '1rem',
                        color: 'white',
                        backgroundColor: 'rgba(0,0,0,0.6)',
                        backdropFilter: 'blur(15px)',
                        padding: '1rem',
                        borderRadius: '12px'
                      }}>
                        <p style={{ margin: 0, fontSize: '0.75rem', opacity: 0.9, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                          {galleryImages[currentSlide].category} • {currentSlide + 1}/{galleryImages.length}
                        </p>
                        <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.9rem', fontWeight: '500' }}>
                          {galleryImages[currentSlide].alt}
                        </p>
                      </div>
                    </div>
                    
                    {/* Dot Navigation */}
                    <div style={{
                      display: 'flex',
                      justifyContent: 'center',
                      gap: '0.5rem',
                      marginBottom: '1rem'
                    }}>
                      {galleryImages.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentSlide(index)}
                          aria-label={`View gallery image ${index + 1} of ${galleryImages.length}`}
                          style={{
                            width: currentSlide === index ? '20px' : '8px',
                            height: '8px',
                            borderRadius: '4px',
                            border: 'none',
                            backgroundColor: currentSlide === index ? semanticColors.brand.primary : 'rgba(0,0,0,0.3)',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease'
                          }}
                        />
                      ))}
                    </div>
                  </motion.div>
                )}



                {/* Carousel View */}
                {viewMode === 'carousel' && (
                  <motion.div
                    key="carousel"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                    style={{
                      overflowX: 'hidden',
                      position: 'relative'
                    }}
                  >
                    <div style={{
                      display: 'flex',
                      transform: `translateX(-${currentSlide * 100}%)`,
                      transition: 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                    }}>
                      {galleryImages.map((image, index) => (
                        <div
                          key={index}
                          style={{
                            minWidth: '100%',
                            height: '300px',
                            position: 'relative',
                            borderRadius: '16px',
                            overflow: 'hidden',
                            margin: '0 0.25rem'
                          }}
                          onClick={() => openModal(index)}
                        >
                          <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            style={{
                              objectFit: 'cover'
                            }}
                            quality={50} // Desktop optimized compression
                          />
                          <div style={{
                            position: 'absolute',
                            top: '1rem',
                            right: '1rem',
                            backgroundColor: 'rgba(0,0,0,0.5)',
                            color: 'white',
                            padding: '0.5rem 1rem',
                            borderRadius: '20px',
                            fontSize: '0.75rem',
                            fontWeight: '500'
                          }}>
                            {index + 1}/{galleryImages.length}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Grid View */}
                {viewMode === 'grid' && (
                  <motion.div
                    key="grid"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(2, 1fr)',
                      gap: '0.75rem'
                    }}
                  >
                    {galleryImages.map((image, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => openModal(index)}
                        style={{
                          aspectRatio: '1',
                          borderRadius: '12px',
                          overflow: 'hidden',
                          cursor: 'pointer',
                          position: 'relative'
                        }}
                      >
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          sizes="(max-width: 768px) 50vw, 33vw"
                          style={{
                            objectFit: 'cover'
                          }}
                          quality={70}
                        />
                        <div style={{
                          position: 'absolute',
                          bottom: '0.5rem',
                          left: '0.5rem',
                          right: '0.5rem',
                          backgroundColor: 'rgba(0,0,0,0.7)',
                          color: 'white',
                          padding: '0.5rem',
                          borderRadius: '6px',
                          fontSize: '0.75rem',
                          textAlign: 'center'
                        }}>
                          {image.category}
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            /* Desktop Layout remains the same */
            <div>
              {/* Featured Main Image */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                style={{ marginBottom: '3rem' }}
              >
                <div 
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '60vh',
                    minHeight: '400px',
                    borderRadius: '2px',
                    overflow: 'hidden',
                    cursor: 'pointer'
                  }}
                  onClick={() => openModal(0)}
                >
                  <Image
                    src={galleryImages[0].src}
                    alt={galleryImages[0].alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{
                      objectFit: 'cover',
                      display: 'block'
                    }}
                    priority
                    quality={70}
                  />
                  <div style={{
                    position: 'absolute',
                    bottom: '2rem',
                    left: '2rem',
                    color: 'white',
                    backgroundColor: 'rgba(0,0,0,0.3)',
                    backdropFilter: 'blur(10px)',
                    padding: '1rem 1.5rem',
                    borderRadius: '2px',
                    border: '1px solid rgba(255,255,255,0.1)'
                  }}>
                    <p style={{ margin: 0, fontSize: '0.875rem', fontWeight: '300', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                      Featured View
                    </p>
                    <p style={{ margin: '0.25rem 0 0 0', fontSize: '1.125rem', fontWeight: '400' }}>
                      {galleryImages[0].alt}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Desktop Grid Gallery */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '1.5rem'
              }}>
                {galleryImages.slice(1).map((image, index) => (
                  <motion.div
                    key={index + 1}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    onClick={() => openModal(index + 1)}
                    style={{
                      position: 'relative',
                      aspectRatio: '4/3',
                      borderRadius: '2px',
                      overflow: 'hidden',
                      cursor: 'pointer',
                      transition: 'transform 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-4px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 768px) 50vw, 33vw"
                      style={{
                        objectFit: 'cover',
                        display: 'block',
                        transition: 'transform 0.5s ease'
                      }}
                      quality={70}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.02)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                    />
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      backgroundColor: 'rgba(0,0,0,0)',
                      transition: 'background-color 0.3s ease',
                      display: 'flex',
                      alignItems: 'flex-end',
                      padding: '1.5rem'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.2)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0)';
                    }}
                    >
                      <div style={{
                        color: 'white',
                        opacity: 0,
                        transform: 'translateY(1rem)',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.opacity = '1';
                        e.currentTarget.style.transform = 'translateY(0)';
                      }}
                      >
                        <p style={{ 
                          margin: 0, 
                          fontSize: '0.75rem', 
                          fontWeight: '300', 
                          letterSpacing: '0.1em', 
                          textTransform: 'uppercase',
                          opacity: 0.8
                        }}>
                          {image.category}
                        </p>
                        <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.875rem', fontWeight: '400' }}>
                          {image.alt}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Modal remains the same */}
      {selectedImage !== null && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 50,
          backgroundColor: 'rgba(0, 0, 0, 0.95)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '16px'
        }}>
          <div style={{ position: 'relative', maxWidth: '1024px', maxHeight: '100%' }}>
            <button
              onClick={closeModal}
              aria-label="Close image gallery modal"
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                zIndex: 10,
                padding: '8px',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                borderRadius: '50%',
                color: 'white',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '40px',
                height: '40px',
                transition: 'background-color 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
              }}
            >
              <X size={24} />
            </button>
            
            <button
              onClick={prevImage}
              aria-label="View previous image"
              style={{
                position: 'absolute',
                left: '16px',
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 10,
                padding: '8px',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                borderRadius: '50%',
                color: 'white',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '40px',
                height: '40px',
                transition: 'background-color 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
              }}
            >
              <ChevronLeft size={24} />
            </button>
            
            <button
              onClick={nextImage}
              aria-label="View next image"
              style={{
                position: 'absolute',
                right: '16px',
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 10,
                padding: '8px',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                borderRadius: '50%',
                color: 'white',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '40px',
                height: '40px',
                transition: 'background-color 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
              }}
            >
              <ChevronRight size={24} />
            </button>

            <div style={{ position: 'relative', maxHeight: '80vh', display: 'flex', justifyContent: 'center' }}>
              <Image
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                width={800}
                height={600}
                style={{
                  maxHeight: '80vh',
                  width: 'auto',
                  objectFit: 'contain',
                  borderRadius: '8px'
                }}
                quality={70}
                sizes="(max-width: 768px) 100vw, 80vw"
                onError={(e) => {
                  console.error('Modal image failed to load:', galleryImages[selectedImage].src)
                }}
              />
              <div style={{
                position: 'absolute',
                bottom: '16px',
                left: '16px',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                color: 'white',
                padding: '12px',
                borderRadius: '8px'
              }}>
                <p style={{ fontWeight: '500', margin: '0 0 4px 0' }}>{galleryImages[selectedImage].category}</p>
                <p style={{ fontSize: '14px', opacity: 0.9, margin: 0 }}>{galleryImages[selectedImage].alt}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}