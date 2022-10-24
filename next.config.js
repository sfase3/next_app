/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['via.placeholder.com','media.geeksforgeeks.org'],
},
}

module.exports = nextConfig
