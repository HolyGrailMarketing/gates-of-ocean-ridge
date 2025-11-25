// Performance-optimized intersection observer hook
// Reduces main thread work by batching DOM reads/writes
'use client'

import { useEffect, useRef, useState } from 'react'

interface UseIntersectionObserverOptions {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
}

export const useIntersectionObserver = (
  options: UseIntersectionObserverOptions = {}
) => {
  const [isVisible, setIsVisible] = useState(false)
  const [hasTriggered, setHasTriggered] = useState(false)
  const elementRef = useRef<HTMLElement>(null)
  const observerRef = useRef<IntersectionObserver | null>(null)

  const { threshold = 0.1, rootMargin = '50px', triggerOnce = true } = options

  useEffect(() => {
    const element = elementRef.current
    if (!element || (triggerOnce && hasTriggered)) return

    // Use requestIdleCallback for non-critical observer setup
    const setupObserver = () => {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          // Batch DOM updates to reduce layout thrashing
          requestAnimationFrame(() => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setIsVisible(true)
                if (triggerOnce) {
                  setHasTriggered(true)
                  observerRef.current?.disconnect()
                }
              } else if (!triggerOnce) {
                setIsVisible(false)
              }
            })
          })
        },
        { threshold, rootMargin }
      )

      observerRef.current.observe(element)
    }

    // Use requestIdleCallback if available, fallback to timeout
    if ('requestIdleCallback' in window) {
      requestIdleCallback(setupObserver)
    } else {
      setTimeout(setupObserver, 0)
    }

    return () => {
      observerRef.current?.disconnect()
    }
  }, [threshold, rootMargin, triggerOnce, hasTriggered])

  return { ref: elementRef, isVisible }
}