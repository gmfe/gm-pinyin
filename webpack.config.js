var path = require('path')

module.exports = {
  mode: 'production',
  entry: './lib/web-pinyin.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'pinyin.js',
    library: 'PinYin',
    libraryTarget: 'var'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  }
}
