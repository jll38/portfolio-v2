
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_LAST_FM_API_KEY: process.env.NEXT_PUBLIC_LAST_FM_API_KEY,
    LAST_FM_API_SECRET: process.env.LAST_FM_API_SECRET,
  },
  images: {
    domains: ['lastfm.freetls.fastly.net'],
  },
};

module.exports = nextConfig;
