/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/SDS',
  assetPrefix: '/SDS/',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig 