/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
     remotePatterns: [
      {
        protocol: 'http',
        hostname: 'backend',
        port: '3001'
      },
    ],
  },
};

module.exports = nextConfig;
