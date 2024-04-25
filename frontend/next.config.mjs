/** @type {import('next').NextConfig} */

const nextConfig = {
  // ...
  /**
   * @param {import('webpack').Configuration} webpackConfig
   * @returns {import('webpack').Configuration}
   */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com'
      },
      {
        protocol: 'https',
        hostname: 'e7.pngegg.com'
      }
    ]
  },
  trailingSlash: false,
  target: 'serverless',
  distDir: 'dist'
  // webpack(webpackConfig) {
  //   return {
  //     ...webpackConfig,
  //     optimization: {
  //       minimize: false,
  //     },
  //   };
  // },
}

export default nextConfig
