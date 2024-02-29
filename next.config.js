/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co",
        // ...
      },

      {
        protocol: "https",
        hostname: "https://www.pexels.com/",
        // ...
      },
      {
        protocol: "https",
        hostname: "AleehaLogistics-storage.s3.me-central-1.amazonaws.com",
        // ...
      },
    ],
  },
};

module.exports = nextConfig;
