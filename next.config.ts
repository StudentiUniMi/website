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
  reactStrictMode: true,
  i18n,
}

export default nextConfig
