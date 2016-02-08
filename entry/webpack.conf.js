var webpack = require('webpack'),
  path = require('path')

module.exports = {
  externals: {},
  devServer: {
    host: 'localhost'
  },
  resolve: {
    root: path.join(__dirname, '..', 'modules'),
    extensions: ['', '.js', '.jsx', '.json', '.css', '.less']
  }
}