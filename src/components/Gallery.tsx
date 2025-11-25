'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
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

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [mounted, setMounted] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [viewMode, setViewMode] = useState<'featured' | 'carousel' | 'grid'>('featured')

  useEffect(() => {
    setMounted(true)
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => prev === 0 ? galleryImages.length - 1 : prev - 1)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
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

          {/* Creative Mobile Layout */}
          {isMobile ? (
            <div>
              {/* Mobile View Toggle */}
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '1rem',
                marginBottom: '2rem'
              }}>
                {['featured', 'carousel', 'grid'].map((mode) => (
                  <button
                    key={mode}
                    onClick={() => setViewMode(mode as any)}
                    style={{
                      padding: '0.5rem 1rem',
                      borderRadius: '20px',
                      border: 'none',
                      backgroundColor: viewMode === mode ? semanticColors.brand.primary : 'transparent',
                      color: viewMode === mode ? 'white' : semanticColors.text.secondary,
                      fontSize: '0.875rem',
                      fontWeight: '400',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      textTransform: 'capitalize'
                    }}
                  >
                    {mode}
                  </button>
                ))}
              </div>

              {/* Featured View */}
              {viewMode === 'featured' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div style={{
                    position: 'relative',
                    height: '300px',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    marginBottom: '1rem'
                  }}>
                    <img
                      src={galleryImages[currentSlide].src}
                      alt={galleryImages[currentSlide].alt}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                      onClick={() => openModal(currentSlide)}
                    />
                    <div style={{
                      position: 'absolute',
                      bottom: '1rem',
                      left: '1rem',
                      right: '1rem',
                      color: 'white',
                      backgroundColor: 'rgba(0,0,0,0.5)',
                      backdropFilter: 'blur(10px)',
                      padding: '1rem',
                      borderRadius: '8px'
                    }}>
                      <p style={{ margin: 0, fontSize: '0.75rem', opacity: 0.8, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                        {galleryImages[currentSlide].category}
                      </p>
                      <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.9rem', fontWeight: '400' }}>
                        {galleryImages[currentSlide].alt}
                      </p>
                    </div>
                  </div>
                  
                  {/* Thumbnail Navigation */}
                  <div style={{
                    display: 'flex',
                    gap: '0.5rem',
                    overflowX: 'auto',
                    padding: '0.5rem 0',
                    scrollSnapType: 'x mandatory'
                  }}>
                    {galleryImages.map((image, index) => (
                      <div
                        key={index}
                        onClick={() => goToSlide(index)}
                        style={{
                          minWidth: '60px',
                          height: '60px',
                          borderRadius: '8px',
                          overflow: 'hidden',
                          cursor: 'pointer',
                          border: currentSlide === index ? `2px solid ${semanticColors.brand.primary}` : '2px solid transparent',
                          scrollSnapAlign: 'start'
                        }}
                      >
                        <img
                          src={image.src}
                          alt={image.alt}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            opacity: currentSlide === index ? 1 : 0.6
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Carousel View */}
              {viewMode === 'carousel' && (
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div style={{
                    position: 'relative',
                    height: '400px',
                    perspective: '1000px'
                  }}>
                    {galleryImages.map((image, index) => {
                      const offset = index - currentSlide
                      const isActive = offset === 0
                      const isNext = offset === 1 || (currentSlide === galleryImages.length - 1 && index === 0)
                      const isPrev = offset === -1 || (currentSlide === 0 && index === galleryImages.length - 1)
                      
                      return (
                        <div
                          key={index}
                          onClick={() => goToSlide(index)}
                          style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            width: isActive ? '280px' : '200px',
                            height: isActive ? '350px' : '250px',
                            borderRadius: '16px',
                            overflow: 'hidden',
                            cursor: 'pointer',
                            transform: `
                              translate(-50%, -50%)
                              translateX(${
                                isActive ? '0px' :
                                isNext ? '150px' :
                                isPrev ? '-150px' : 
                                offset > 0 ? '300px' : '-300px'
                              })
                              rotateY(${
                                isActive ? '0deg' :
                                isNext ? '-25deg' :
                                isPrev ? '25deg' : '0deg'
                              })
                              scale(${
                                isActive ? '1' :
                                (isNext || isPrev) ? '0.8' : '0.6'
                              })
                            `,
                            zIndex: isActive ? 10 : (isNext || isPrev) ? 5 : 1,
                            opacity: isActive ? 1 : (isNext || isPrev) ? 0.8 : 0.4,
                            transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                            boxShadow: isActive ? '0 20px 40px rgba(0,0,0,0.3)' : '0 10px 20px rgba(0,0,0,0.2)'
                          }}
                        >
                          <img
                            src={image.src}
                            alt={image.alt}
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover'
                            }}
                          />
                          {isActive && (
                            <div style={{
                              position: 'absolute',
                              bottom: 0,
                              left: 0,
                              right: 0,
                              background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                              color: 'white',
                              padding: '2rem 1rem 1rem',
                              textAlign: 'center'
                            }}>
                              <p style={{ margin: 0, fontSize: '0.75rem', opacity: 0.8, textTransform: 'uppercase' }}>
                                {image.category}
                              </p>
                              <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.9rem', fontWeight: '500' }}>
                                {image.alt}
                              </p>
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </div>
                  
                  {/* Carousel Controls */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '1rem',
                    marginTop: '2rem'
                  }}>
                    <button
                      onClick={prevSlide}
                      style={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '50%',
                        border: 'none',
                        backgroundColor: semanticColors.brand.primary,
                        color: 'white',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.2rem'
                      }}
                    >
                      ‹
                    </button>
                    <button
                      onClick={nextSlide}
                      style={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '50%',
                        border: 'none',
                        backgroundColor: semanticColors.brand.primary,
                        color: 'white',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.2rem'
                      }}
                    >
                      ›
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Compact Grid View */}
              {viewMode === 'grid' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '0.5rem'
                  }}
                >
                  {galleryImages.map((image, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      onClick={() => openModal(index)}
                      style={{
                        aspectRatio: '1',
                        borderRadius: '8px',
                        overflow: 'hidden',
                        cursor: 'pointer'
                      }}
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover'
                        }}
                        loading="lazy"
                      />
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </div>
          ) : (
            /* Desktop Layout */
            <div>
              {/* Featured Main Image */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                style={{ marginBottom: 'clamp(2rem, 5vw, 3rem)' }}
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
                  <img
                    src={galleryImages[0].src}
                    alt={galleryImages[0].alt}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                    loading="eager"
                    decoding="async"
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
                    <img
                      src={image.src}
                      alt={image.alt}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                        transition: 'transform 0.5s ease'
                      }}
                      loading="lazy"
                      decoding="async"
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

      {/* Modal */}
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

            <div style={{ position: 'relative' }}>
              <img
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                style={{
                  maxHeight: '80vh',
                  width: 'auto',
                  objectFit: 'contain',
                  borderRadius: '8px'
                }}
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