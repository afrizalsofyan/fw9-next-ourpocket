/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites () {
    return {
      fallback: [
        [
          //auth
          {
            source: '/login',
            destination: '/auth/login'
          },
          {
            source: '/register',
            destination: '/auth/register'
          },
          {
            source: '/reset-password/:key*',
            destination: '/auth/new-password/:key*',
            // has:[{type: "query", value: "[keyChange]"}]
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
          },
          //DASHBOARD
          //profile
          {
            source: '/dashboard/profile/change-new-pin',
            destination: '/dashboard/change-new-pin'
          },
          {
            source: '/dashboard/profile/change-password',
            destination: '/dashboard/change-password'
          },
          {
            source: '/dashboard/profile/change-pin',
            destination: '/dashboard/change-pin'
          },
          {
            source: '/dashboard/profile/details',
            destination: '/dashboard/detail-profile'
          },
          {
            source: '/dashboard/profile/edit-phone',
            destination: '/dashboard/edit-phone'
          },
          {
            source: '/dashboard/profile/edit-profile',
            destination: '/dashboard/edit-profile'
          },
          {
            source: '/dashboard/profile/manage-phone',
            destination: '/dashboard/manage-phone'
          },
        ]
      ]
    }
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
