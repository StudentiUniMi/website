import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  i18n: {
    locales: ["it", "en"],
    defaultLocale: "it",
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
    ]
  },
}

export default nextConfig
