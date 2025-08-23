import type { NextConfig } from "next"
import { i18n } from "./next-i18next.config"

const nextConfig: NextConfig = {
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
    ]
  },
  reactStrictMode: true,
  i18n,
}

export default nextConfig
