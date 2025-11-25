'use client'

import Image from 'next/image'
import { useState } from 'react'

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  style?: React.CSSProperties
  priority?: boolean
  sizes?: string
  quality?: number
  fill?: boolean
  onClick?: () => void
  onMouseEnter?: (e: React.MouseEvent) => void
  onMouseLeave?: (e: React.MouseEvent) => void
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
  style,
  priority = false,
  sizes = "100vw",
  quality = 85,
  fill = false,
  onClick,
  onMouseEnter,
  onMouseLeave,
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  // Fallback to regular img if Next.js Image fails
  if (hasError) {
    return (
      <img
        src={src}
        alt={alt}
        style={{
          width: fill ? '100%' : width,
          height: fill ? '100%' : height,
          objectFit: 'cover',
          display: 'block',
          ...style
        }}
        className={className}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        loading={priority ? 'eager' : 'lazy'}
      />
    )
  }

  const imageProps = {
    src,
    alt,
    className,
    style: {
      ...style,
      transition: isLoading ? 'opacity 0.3s ease' : 'none',
      opacity: isLoading ? 0.8 : 1,
    },
    quality,
    priority,
    onClick,
    onMouseEnter,
    onMouseLeave,
    onLoad: () => setIsLoading(false),
    onError: () => setHasError(true),
  }

  if (fill) {
    return (
      <Image
        {...imageProps}
        fill
        sizes={sizes}
        style={{
          objectFit: 'cover',
          ...imageProps.style,
        }}
      />
    )
  }

  return (
    <Image
      {...imageProps}
      width={width || 800}
      height={height || 600}
      sizes={sizes}
    />
  )
}