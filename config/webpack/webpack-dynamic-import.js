const path = require('path')
const merge = require('./merge')
const rootPath = process.cwd()
const baseConfig = require('./webpack-base')
const TerserPlugin = require('terser-webpack-plugin')
const outputPath = path.join(rootPath, 'dist', 'dynamic-import')

const prodConfig = {
  mode: 'production',
  stats: {
    children: true
  },
  output: {
    path: outputPath,
    // FYI: returned the old content as in the latest version of the library
    // it adds a subfolder and the Viewer project is not able to work with it
    libraryTarget: 'umd',
    globalObject: 'this',
    filename: '[name].min.js'
  },
  optimization: {
    // minimize: false,
    minimizer: [
      new TerserPlugin({
        parallel: true
      })
    ]
  }
}

module.exports = merge(baseConfig, prodConfig)
