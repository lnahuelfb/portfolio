import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: false,
  poweredByHeader: false,
  reactStrictMode: true,
  // Inline the ~5 KB stylesheet so it doesn't block first paint.
  experimental: { inlineCss: true },
};

export default nextConfig;
