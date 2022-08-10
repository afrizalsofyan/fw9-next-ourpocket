/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites () {
    return[
      {
        source: '/login',
        destination: '/auth/Login'
      },
      {
        source: '/register',
        destination: '/auth/Register'
      }
    ]
  }
}

module.exports = nextConfig
