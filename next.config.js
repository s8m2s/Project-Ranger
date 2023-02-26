module.exports = {
  reactStrictMode: true,
  images: {
    minimumCacheTTL: 3600 * 24 * 30,
    domains: ['images.prismic.io'],
  },
  experimental: {
    esmExternals: false,
  },
}
