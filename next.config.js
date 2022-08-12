/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites () {
    return[
      {
        source: '/login',
        destination: '/auth/login'
      },
      {
        source: '/register',
        destination: '/auth/register'
      },
      {
        source: '/new-password',
        destination: '/auth/new-password'
      },
      {
        source: '/forget-password',
        destination: '/auth/forget-password'
      },
      {
        source: '/create-pin',
        destination: '/auth/create-pin'
      },
      {
        source: '/create-pin-success',
        destination: '/auth/create-pin-success'
      }
    ]
  },
  // async redirect () {
  //   return [
  //     {

  //     }
  //   ]
  // }
  env: {
    BASE_URL: 'https://fazzpay.herokuapp.com'
  },
  images: {
    domains:[
      'res.cloudinary.com'
    ]
  }
}

module.exports = nextConfig
