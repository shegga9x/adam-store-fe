// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['res.cloudinary.com'],
  },
  output: "standalone",
  // async rewrites() {
  //   return [
  //     {
  //       source: "/api/:path*",
  //       destination: "https://dark-space-278913.postman.co/:path*",
  //     },
  //   ];
  // },
};

export default nextConfig;
