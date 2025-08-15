'use client'

import { useEffect } from 'react'

interface ImagePreloaderProps {
  images: string[]
  priority?: boolean
}

export default function ImagePreloader({ images, priority = false }: ImagePreloaderProps) {
  useEffect(() => {
    if (!priority) {
      // Delay non-priority preloading to not block critical resources
      const timeout = setTimeout(() => {
        preloadImages(images)
      }, 1000)
      
      return () => clearTimeout(timeout)
    } else {
      preloadImages(images)
    }
  }, [images, priority])

  const preloadImages = (imageSrcs: string[]) => {
    imageSrcs.forEach((src) => {
      if (typeof window !== 'undefined') {
        // Use Image constructor for better compatibility and less DOM manipulation
        const img = new Image()
        img.loading = 'eager'
        img.decoding = 'async'
        // Only set crossOrigin for external URLs
        if (src.startsWith('http') && !src.includes(window.location.hostname)) {
          img.crossOrigin = 'anonymous'
        }
        img.src = src
      }
    })
  }

  return null // This component doesn't render anything
}

// Hook for programmatic image preloading
export const useImagePreloader = () => {
  const preloadImage = (src: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      const img = new Image()
      img.onload = () => resolve()
      img.onerror = reject
      img.src = src
    })
  }

  const preloadImages = async (srcs: string[]): Promise<void> => {
    try {
      await Promise.all(srcs.map(preloadImage))
    } catch (error) {
      console.warn('Some images failed to preload:', error)
    }
  }

  return { preloadImage, preloadImages }
}

