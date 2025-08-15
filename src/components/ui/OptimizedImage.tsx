'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface OptimizedImageProps {
  src: string
  alt: string
  className?: string
  fill?: boolean
  width?: number
  height?: number
  sizes?: string
  priority?: boolean
  quality?: number
  placeholder?: 'blur' | 'empty'
  blurDataURL?: string
  fallbackSrc?: string
  onLoad?: () => void
  onError?: () => void
}

// Generate a simple blur placeholder
const generateBlurDataURL = (width: number = 10, height: number = 10) => {
  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height
  const ctx = canvas.getContext('2d')
  
  if (ctx) {
    // Create a subtle gradient blur
    const gradient = ctx.createLinearGradient(0, 0, width, height)
    gradient.addColorStop(0, '#f3f4f6')
    gradient.addColorStop(0.5, '#e5e7eb')
    gradient.addColorStop(1, '#d1d5db')
    
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, width, height)
  }
  
  return canvas.toDataURL()
}

export default function OptimizedImage({
  src,
  alt,
  className,
  fill = false,
  width,
  height,
  sizes,
  priority = false,
  quality = 85,
  placeholder = 'blur',
  blurDataURL,
  fallbackSrc,
  onLoad,
  onError,
  ...props
}: OptimizedImageProps) {
  const [imageError, setImageError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isInView, setIsInView] = useState(priority)
  const imgRef = useRef<HTMLDivElement>(null)

  // Generate blur placeholder if not provided
  const defaultBlurDataURL = blurDataURL || (typeof window !== 'undefined' ? generateBlurDataURL() : undefined)

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority) return
    
    const currentRef = imgRef.current
    if (!currentRef) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true)
            observer.unobserve(entry.target)
          }
        })
      },
      {
        rootMargin: '50px 0px',
        threshold: 0.1,
      }
    )

    observer.observe(currentRef)

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [priority])

  const handleLoad = () => {
    setIsLoading(false)
    onLoad?.()
  }

  const handleError = () => {
    setImageError(true)
    setIsLoading(false)
    onError?.()
  }

  const currentSrc = imageError && fallbackSrc ? fallbackSrc : src

  return (
    <div
      ref={imgRef}
      className={cn(
        'relative overflow-hidden',
        fill && 'w-full h-full',
        className
      )}
    >
      {/* Loading placeholder */}
      {isLoading && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200 animate-pulse">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer" />
        </div>
      )}

      {/* Main image */}
      {isInView && (
        <Image
          src={currentSrc}
          alt={alt}
          fill={fill}
          width={!fill ? width : undefined}
          height={!fill ? height : undefined}
          sizes={sizes}
          priority={priority}
          quality={quality}
          placeholder={placeholder}
          blurDataURL={defaultBlurDataURL}
          className={cn(
            'transition-opacity duration-500',
            isLoading ? 'opacity-0' : 'opacity-100',
            fill && 'object-cover'
          )}
          onLoad={handleLoad}
          onError={handleError}
          {...props}
        />
      )}

      {/* Error state */}
      {imageError && !fallbackSrc && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
          <div className="text-center text-gray-500">
            <svg
              className="w-12 h-12 mx-auto mb-2 opacity-50"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <p className="text-xs">Image unavailable</p>
          </div>
        </div>
      )}
    </div>
  )
}
