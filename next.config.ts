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
      // Adaugă aici alte domenii dacă mai ai imagini de la alte surse
    ],
  },
};

export default nextConfig;
