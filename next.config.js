/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["www.pexels.com", "res.cloudinary.com"],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

module.exports = nextConfig;
