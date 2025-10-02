/** @type {import('next').NextConfig} */

// Extract basePath from NEXT_PUBLIC_BASE_URL if present
// For example: https://robandpdx.github.io/pentafret/ -> /pentafret
const getBasePath = () => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
  if (!baseUrl) {
    return ''
  }

  try {
    const url = new URL(baseUrl)
    const path = url.pathname
    // Remove trailing slash and return empty string if it's just '/'
    return path === '/' ? '' : path.replace(/\/$/, '')
  } catch {
    return ''
  }
}

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  output: 'export',
  transpilePackages: ['@lib/ui'],
  basePath: getBasePath(),
}

// eslint-disable-next-line no-undef
module.exports = nextConfig
