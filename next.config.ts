import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "blog.dcommandosecurity.com",
      },
    ],
  },
};

export default nextConfig;
