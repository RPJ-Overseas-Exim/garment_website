/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "http", hostname: "dummyimage.com", pathname: "/**" },
    ],
  },
};

export default nextConfig;
