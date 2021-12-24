const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const baseUrl = '';
const isProd = process.env.NODE_ENV === 'production'

module.exports = withBundleAnalyzer({
  assetPrefix: isProd ? '' : '',
  poweredByHeader: false,
  trailingSlash: true,
  basePath: baseUrl,
  env: {
    baseUrl: baseUrl,
  },
  future: {
    webpack5: true,
  },
});
