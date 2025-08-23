import type { NextConfig } from "next"

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
  i18n: {
    locales: ["it", "en"],
    defaultLocale: "it",
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
}

export default nextConfig
