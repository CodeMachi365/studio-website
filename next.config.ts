import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [],
  },
  output: "export",
  distDir: "out",
  reactStrictMode: true,
};

export default nextConfig;
