const path = require('path')
const withSass = require('@zeit/next-sass')
const withTypescript = require('@zeit/next-typescript')
const ForkTsCheckerPlugin = require('fork-ts-checker-webpack-plugin')
const TsConfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

const configure = (...conf) => withSass(withTypescript(...conf))

module.exports = configure({
  cssModules: true,
  webpack (config, options) {
    // transform typescript path mappings
    config.resolve.plugins = [
      ...(config.resolve.plugins || []),
      new TsConfigPathsPlugin()
    ]

    // add type-checking
    if (options.isServer) {
      config.plugins.push(new ForkTsCheckerPlugin({
        tsconfig: path.resolve(__dirname, 'tsconfig.json')
      }))
    }

    return config
  },
  sassLoaderOptions: {
    includePaths: [ "src/static/styles" ]
  }
})
