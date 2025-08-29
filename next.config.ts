import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Image optimization
  images: {
    domains: ['images.unsplash.com'],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [320, 576, 768, 992, 1200, 1920, 2048, 3840], // Matching our breakpoints
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  experimental: {
    optimizePackageImports: ['@mui/material', '@mui/icons-material'],
  },
  
  // Performance optimizations
  poweredByHeader: false,
  compress: true,
  
  // Enable static optimization
  trailingSlash: false,
  
  // SEO optimizations
  generateEtags: false, // Disable etags for better caching
  
  // Headers for better performance and security
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Security headers
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'X-Permitted-Cross-Domain-Policies',
            value: 'none',
          },
          {
            key: 'X-Download-Options',
            value: 'noopen',
          },
          // Performance headers
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          // SEO headers
          {
            key: 'X-Robots-Tag',
            value: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
          },
        ],
      },
      {
        source: '/fonts/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/favicon.ico',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/robots.txt',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400',
          },
        ],
      },
      {
        source: '/sitemap.xml',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400',
          },
          {
            key: 'Content-Type',
            value: 'application/xml',
          },
        ],
      },
      {
        source: '/site.webmanifest',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400',
          },
          {
            key: 'Content-Type',
            value: 'application/manifest+json',
          },
        ],
      },
    ];
  },

  // Redirects for SEO
  async redirects() {
    return [
      {
        source: '/aesthetic-clinic',
        destination: '/',
        permanent: true,
      },
      {
        source: '/beauty-clinic-lahore',
        destination: '/',
        permanent: true,
      },
      {
        source: '/cosmetology-clinic-pakistan',
        destination: '/',
        permanent: true,
      },
      {
        source: '/skin-treatments-lahore',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/laser-hair-removal-pakistan',
        destination: '/services/laser-hair-removal',
        permanent: true,
      },
      {
        source: '/hydrafacial-lahore',
        destination: '/services/hydrafacial',
        permanent: true,
      },
      {
        source: '/face-sculpting-pakistan',
        destination: '/services/7d-hifu-face-sculpting',
        permanent: true,
      },
      {
        source: '/body-contouring-lahore',
        destination: '/services/body-contouring',
        permanent: true,
      },
      {
        source: '/anti-aging-treatments-pakistan',
        destination: '/services/skin-rejuvenation',
        permanent: true,
      },
      {
        source: '/hair-fall-treatment-lahore',
        destination: '/services/hair-fall-treatment',
        permanent: true,
      },
      {
        source: '/mens-beauty-treatments-pakistan',
        destination: '/services/mens-aesthetic-treatments',
        permanent: true,
      },
      {
        source: '/book-appointment',
        destination: '/book-consultation',
        permanent: true,
      },
      {
        source: '/free-consultation-lahore',
        destination: '/free-consultation',
        permanent: true,
      },
      {
        source: '/contact-us-lahore',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/about-us-pakistan',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/testimonials-lahore',
        destination: '/testimonials',
        permanent: true,
      },
      {
        source: '/specialists-pakistan',
        destination: '/specialists',
        permanent: true,
      },
      {
        source: '/promotions-lahore',
        destination: '/promotions',
        permanent: true,
      },
      {
        source: '/faq-pakistan',
        destination: '/faq',
        permanent: true,
      },
    ];
  },

  // Rewrites for clean URLs
  async rewrites() {
    return [
      {
        source: '/aesthetic-clinic-lahore',
        destination: '/',
      },
      {
        source: '/aesthetic-clinic-pakistan',
        destination: '/',
      },
      {
        source: '/best-aesthetic-clinic-lahore',
        destination: '/',
      },
      {
        source: '/premium-cosmetology-clinic-pakistan',
        destination: '/',
      },
      {
        source: '/skin-treatment-clinic-lahore',
        destination: '/services',
      },
      {
        source: '/beauty-clinic-pakistan',
        destination: '/',
      },
      {
        source: '/dermatology-clinic-lahore',
        destination: '/services',
      },
      {
        source: '/cosmetic-procedures-pakistan',
        destination: '/services',
      },
      {
        source: '/anti-aging-treatments-lahore',
        destination: '/services/skin-rejuvenation',
      },
      {
        source: '/hydrafacial-pakistan',
        destination: '/services/hydrafacial',
      },
      {
        source: '/7d-hifu-lahore',
        destination: '/services/7d-hifu-face-sculpting',
      },
      {
        source: '/face-sculpting-pakistan',
        destination: '/services/7d-hifu-face-sculpting',
      },
      {
        source: '/body-contouring-lahore',
        destination: '/services/body-contouring',
      },
      {
        source: '/skin-rejuvenation-pakistan',
        destination: '/services/skin-rejuvenation',
      },
      {
        source: '/hair-fall-treatment-lahore',
        destination: '/services/hair-fall-treatment',
      },
      {
        source: '/mens-aesthetic-treatments-pakistan',
        destination: '/services/mens-aesthetic-treatments',
      },
      {
        source: '/fda-approved-treatments-lahore',
        destination: '/services',
      },
      {
        source: '/no-downtime-procedures-pakistan',
        destination: '/services',
      },
      {
        source: '/celebrity-aesthetic-clinic-lahore',
        destination: '/',
      },
    ];
  },

  // Environment variables for SEO
  env: {
    SITE_URL: 'https://mindsthetics.com',
    SITE_NAME: 'Mindsthetics',
    SITE_DESCRIPTION: "Pakistan's leading aesthetic clinic in Lahore offering premium cosmetology services",
    GOOGLE_ANALYTICS_ID: process.env.GOOGLE_ANALYTICS_ID,
    GOOGLE_SEARCH_CONSOLE_ID: process.env.GOOGLE_SEARCH_CONSOLE_ID,
  },
};

export default nextConfig;