/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "172.21.0.2",
      },
    ],
  },
};

module.exports = nextConfig;
