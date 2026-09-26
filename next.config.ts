import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
];

const nextConfig: NextConfig = {
  trailingSlash: false,
  poweredByHeader: false,
  async headers() {
    return [
      { source: "/:path*", headers: securityHeaders },
      {
        source: "/brand/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },
  async redirects() {
    return [
      // One canonical host: https://digitalburj.com
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.digitalburj.com" }],
        destination: "https://digitalburj.com/:path*",
        permanent: true,
      },
      { source: "/business", destination: "/business-ai", permanent: true },
      { source: "/about", destination: "/company/about", permanent: true },
      { source: "/verified-talent", destination: "/talent", permanent: true },
      { source: "/blog", destination: "/insights", permanent: true },
    ];
  },
};

export default nextConfig;
