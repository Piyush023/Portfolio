/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  // Important for App Router
  trailingSlash: true,
};

export default nextConfig;
// Or if using .js: module.exports = nextConfig
