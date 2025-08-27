import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  i18n: {
    locales: ["it"],
    defaultLocale: "it",
    localeDetection: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "studentiunimi.it",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/courses/:slug",
        destination: "/degrees/:slug",
        permanent: true,
      },
      {
        source: "/it/:path*",
        destination: "/:path*",
        permanent: true,
      },
    ]
  },
}

export default nextConfig
