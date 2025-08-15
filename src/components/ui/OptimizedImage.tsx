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

// Get the base path for GitHub Pages
const getBasePath = () => {
  if (typeof window !== 'undefined') {
    return window.location.pathname.includes('/catering') ? '/catering' : ''
  }
  return process.env.NODE_ENV === 'production' ? '/catering' : ''
}

// Fix image src for GitHub Pages
const fixImageSrc = (src: string) => {
  // If it's already an external URL, return as-is
  if (src.startsWith('http')) return src
  
  // If it's a local path, ensure it has the correct base path
  if (src.startsWith('/')) {
    const basePath = getBasePath()
    return basePath + src
  }
  
  return src
}

// Static blur data URL for better SSR compatibility
const DEFAULT_BLUR_DATA_URL = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHZpZXdCb3g9IjAgMCAxMCAxMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZGllbnQiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgo8c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZjNmNGY2O3N0b3Atb3BhY2l0eToxIiAvPgo8c3RvcCBvZmZzZXQ9IjUwJSIgc3R5bGU9InN0b3AtY29sb3I6I2U1ZTdlYjtzdG9wLW9wYWNpdHk6MSIgLz4KPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZDFkNWRiO3N0b3Atb3BhY2l0eToxIiAvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+CjxyZWN0IHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIgZmlsbD0idXJsKCNncmFkaWVudCkiLz4KPC9zdmc+'

// Generate a simple blur placeholder
const generateBlurDataURL = (): string => {
  return DEFAULT_BLUR_DATA_URL
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
  placeholder = 'empty',
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

  // Fix image sources for GitHub Pages
  const fixedSrc = fixImageSrc(src)
  const fixedFallbackSrc = fallbackSrc ? fixImageSrc(fallbackSrc) : undefined

  // Generate blur placeholder if not provided and placeholder is blur
  const shouldUseBlur = placeholder === 'blur'
  const defaultBlurDataURL = shouldUseBlur ? (blurDataURL || generateBlurDataURL()) : undefined

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
    console.warn('Image failed to load:', currentSrc)
    setImageError(true)
    setIsLoading(false)
    onError?.()
  }

  const currentSrc = imageError && fixedFallbackSrc ? fixedFallbackSrc : fixedSrc

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
          {...(shouldUseBlur && defaultBlurDataURL ? { blurDataURL: defaultBlurDataURL } : {})}
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
