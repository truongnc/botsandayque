/** @type {import('next').NextConfig} */
const nextConfig = {
  // Tối ưu hình ảnh
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
    formats: ['image/avif', 'image/webp'],
  },

  // Nén response & bỏ header thừa
  compress: true,
  poweredByHeader: false,

  // MDX support
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],

  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ]
  },

  // Redirects tiếng Anh → tiếng Việt
  async redirects() {
    return [
      { source: '/products', destination: '/san-pham', permanent: true },
      { source: '/contact', destination: '/lien-he', permanent: true },
      { source: '/about', destination: '/ve-chung-toi', permanent: true },
    ]
  },
}

module.exports = nextConfig
