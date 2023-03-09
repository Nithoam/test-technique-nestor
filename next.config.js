/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  optimizeFonts: false,
  images: {
    domains: ["media.istockphoto.com", "cdn.pixabay.com"],
  },
};

module.exports = nextConfig;
