import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export for VPS deployment via Namecheap
  // output: "export", // Uncomment this when ready to deploy as static site
  // OR keep default for Node.js server deployment on VPS

  images: {
    // Add external image domains here when needed e.g.:
    // domains: ["cdn.cardcentrals.com"],
    formats: ["image/avif", "image/webp"],
  },

  // Strict mode catches potential React issues early
  reactStrictMode: true,

  // Remove X-Powered-By header for security
  poweredByHeader: false,
};

export default nextConfig;
