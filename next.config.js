/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  // Experimental: disable powered-by header for a leaner, more neutral footprint
  poweredByHeader: false,
  trailingSlash: false,
}

module.exports = nextConfig
