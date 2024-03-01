/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co",
      },

      {
        protocol: "https",
        hostname: "cbu01.alicdn.com",
      },
      {
        protocol: "https",
        hostname: "itemcdn.tmall.com",
      },
      {
        protocol: "https",
        hostname: "cloud.video.taobao.com",
      },
    ],
  },
};

module.exports = nextConfig;
