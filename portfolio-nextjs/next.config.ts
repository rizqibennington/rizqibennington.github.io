import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // No basePath or assetPrefix needed for user GitHub Pages (username.github.io)
};

export default nextConfig;
