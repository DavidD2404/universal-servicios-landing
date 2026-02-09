/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimización para static generation y mejor performance
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'behold.pictures',
      },
      {
        protocol: 'https',
        hostname: '**.cdninstagram.com',
      },
    ],
    formats: ['image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },

  // Optimizaciones de producción
  compiler: {
    // Remover console.log en producción (excepto errors y warnings)
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
  },

  // Habilitar compresión
  compress: true,

  // Power By header removal para seguridad
  poweredByHeader: false,
}

module.exports = nextConfig