/**
 * Image optimization utilities
 */

// Generate optimized image URLs for different formats
export const getOptimizedImageUrl = (
  src: string, 
  width: number, 
  height?: number, 
  quality: number = 85,
  format: 'webp' | 'avif' | 'jpg' = 'webp'
): string => {
  // If it's already an optimized URL or SVG, return as-is
  if (src.includes('?') || src.endsWith('.svg')) {
    return src
  }

  // For Unsplash images, add optimization parameters
  if (src.includes('unsplash.com')) {
    const params = new URLSearchParams({
      'auto': 'format',
      'fit': 'crop',
      'w': width.toString(),
      'q': quality.toString(),
      'fm': format
    })
    
    if (height) {
      params.set('h', height.toString())
    }
    
    return `${src.split('?')[0]}?${params.toString()}`
  }

  return src
}

// Generate srcSet for responsive images
export const generateSrcSet = (
  src: string,
  sizes: number[] = [640, 768, 1024, 1280, 1920],
  quality: number = 85
): string => {
  return sizes
    .map(size => `${getOptimizedImageUrl(src, size, undefined, quality)} ${size}w`)
    .join(', ')
}

// Generate sizes attribute for responsive images
export const generateSizes = (breakpoints: { [key: string]: string }): string => {
  return Object.entries(breakpoints)
    .map(([breakpoint, size]) => {
      if (breakpoint === 'default') return size
      return `(max-width: ${breakpoint}) ${size}`
    })
    .join(', ')
}

// Common responsive image configurations
export const commonSizes = {
  hero: generateSizes({
    '768px': '100vw',
    '1024px': '100vw',
    'default': '100vw'
  }),
  card: generateSizes({
    '640px': '100vw',
    '768px': '50vw',
    '1024px': '33vw',
    'default': '25vw'
  }),
  gallery: generateSizes({
    '640px': '100vw',
    '768px': '50vw',
    '1200px': '33vw',
    'default': '25vw'
  }),
  portrait: generateSizes({
    '640px': '100vw',
    '768px': '50vw',
    'default': '33vw'
  })
}

// Image loading priorities
export const getImagePriority = (index: number, section: 'hero' | 'above-fold' | 'below-fold'): boolean => {
  switch (section) {
    case 'hero':
      return true
    case 'above-fold':
      return index < 3
    case 'below-fold':
      return false
    default:
      return false
  }
}

// Quality settings based on image type
export const getOptimalQuality = (imageType: 'hero' | 'portrait' | 'gallery' | 'thumbnail'): number => {
  switch (imageType) {
    case 'hero':
      return 90
    case 'portrait':
      return 85
    case 'gallery':
      return 85
    case 'thumbnail':
      return 75
    default:
      return 80
  }
}
