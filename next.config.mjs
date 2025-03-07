/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/users-list_test',
  assetPrefix: '/users-list_test',
  reactStrictMode: true,
};

export default nextConfig;
