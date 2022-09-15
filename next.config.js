/** @type {import('next').NextConfig} */

require("dotenv").config();

const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  env: {
    CLIENT_EMAIL: process.env.CLIENT_EMAIL,
    PRIVATE_KEY: process.env.PRIVATE_KEY,
    SHEETS_ID: process.env.SHEETS_ID,
  },
  images: {
    domains: ["img.youtube.com"],
  },
};

module.exports = nextConfig;
