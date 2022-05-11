/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  future: {
    webpack5: true,
  },
  env: {
    BASE_API_URL: process.env.BASE_API_URL,
    PUBLIC_API_KEY: process.env.PUBLIC_API_KEY,
    HASH: process.env.HASH,
  },
};

module.exports = nextConfig;
