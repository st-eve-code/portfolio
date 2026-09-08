import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Disable server-side image caching so updated local images
    // are always served fresh without needing a .next cache clear.
    minimumCacheTTL: 0,
  },
};

export default nextConfig;
