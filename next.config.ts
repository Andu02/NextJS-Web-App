import type { NextConfig } from "next";

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
      // adaugă și alte domenii externe aici, dacă mai folosești
    ],
  },
};

export default nextConfig;

