const withCSS = require("@zeit/next-css");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = withCSS({ nextConfig });

module.exports = nextConfig;
