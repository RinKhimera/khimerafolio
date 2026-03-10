import type { NextConfig } from "next"
import createNextIntlPlugin from "next-intl/plugin"

const withNextIntl = createNextIntlPlugin("./i18n/request.ts")

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Legacy route from old portfolio: /$
      {
        source: "/$",
        destination: "/en",
        permanent: true,
      },
      // Legacy routes from old portfolio (rinkhimera-portfolio)
      {
        source: "/about",
        destination: "/en",
        permanent: true,
      },
      {
        source: "/projects",
        destination: "/en",
        permanent: true,
      },
      {
        source: "/blog/:path*",
        destination: "/en",
        permanent: true,
      },
      {
        source: "/miscellaneous/:path*",
        destination: "/en",
        permanent: true,
      },
    ]
  },
}

export default withNextIntl(nextConfig)
