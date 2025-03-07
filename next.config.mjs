/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: false,
  },
  basePath: '/users-list_test/',
  assetPrefix: '/users-list_test/',
  reactStrictMode: true,
};

export default nextConfig;
