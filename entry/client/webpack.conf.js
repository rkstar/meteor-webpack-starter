var webpack = require('webpack'),
  babelSettings = {
    presets: ['react', 'es2015', 'stage-0'],
    plugins: ['transform-decorators-legacy']
  }

if( process.env.NOD_ENV !== 'production' && !process.env.IS_MIRROR ){
  babelSettings.plugins.push(['react-transform', {
    transforms: [{
      transform: 'react-transform-hmr',
      imports: ['react'],
      locals: ['module']
    },{
      transform: 'react-transform-catch-errors',
      imports: ['react', 'redbox-react']
    }]
  }])
}

module.exports = {
  entry: './entry',
  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'babel', query: babelSettings, exclude: /node_modules/ },
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.less$/, loader: 'style!css!less' },
      { test: /\.(png|jpe?g)(\?.*)?$/, loader: 'url?limit=8182' },
      { test: /\.(svg|ttf|woff|eot)(\?.*)?$/, loader: 'file' }
    ]
  }
}
