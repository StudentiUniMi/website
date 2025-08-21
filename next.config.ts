import type { NextConfig } from "next"
import { i18n } from "./next-i18next.config"

const nextConfig: NextConfig = {
  reactStrictMode: true,
  i18n,
}

export default nextConfig
