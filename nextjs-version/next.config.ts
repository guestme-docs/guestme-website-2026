import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/guestme-website-2026" : "",
  assetPrefix: isProd ? "/guestme-website-2026/" : "",
  experimental: {
    optimizePackageImports: ["lucide-react", "@radix-ui/react-icons"],
  },
  turbopack: {},

  // Disable server-side image optimization for static export
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
