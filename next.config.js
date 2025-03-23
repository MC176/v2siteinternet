/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "images.unsplash.com",
      "cdn.jsdelivr.net" // Added for flag icons
    ],
  },
};

module.exports = nextConfig;