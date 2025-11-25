import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Enable modern image formats with priority order
    formats: ['image/avif', 'image/webp'],
    // Optimized device sizes for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    // Optimized image sizes
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Include all quality values used throughout the app
    qualities: [45, 50, 55, 60, 65, 70, 75, 80, 85],
    // Enable modern image optimization
    dangerouslyAllowSVG: false,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // Minimize image processing
    minimumCacheTTL: 86400,
  },
  // Enable compression
  compress: true,
  // Performance optimizations
  experimental: {
    // Aggressive package import optimization for TBT reduction
    optimizePackageImports: ['framer-motion', 'lucide-react'],
    // Enable modern bundling
    esmExternals: true,
  },
  // Use Turbopack for Next.js 16 optimization
  turbopack: {
    // Enable Turbopack optimizations for better bundle splitting
  },
  // Compiler optimizations
  compiler: {
    // Remove console logs in production
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

export default nextConfig;
