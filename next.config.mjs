/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pub-a73f7d8384414e33a55eebf09fd805cd.r2.dev',
        port: '',
      },
    ],
  },
};

export default nextConfig;
