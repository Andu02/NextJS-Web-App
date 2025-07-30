import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
      {
        protocol: "https",
        hostname: "imgs.search.brave.com",
      },
    ],
  },

  // experimental: {
  //   ppr: 'incremental', // comentat pentru că nu e suportat în versiunea actuală de Next.js
  // },

  devIndicators: {
    position: 'bottom-right',
  },
};

export default nextConfig;
