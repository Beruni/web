var webpack = require('webpack');

module.exports = {
  devtool: 'inline-source-map',

  resolve: {
    extensions: ['', '.ts', '.js']
  },

  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'ts'
      },
      {
        test: /\.jade$/,
        loader: 'raw!jade-html'
      },
      {
        test: /\.css$/,
        loader: 'null'

      },
      {
        test: /\.jade$/,
        loader: 'raw!jade-html'
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'null'
      },
      {
        test: /\.scss$/,
        loader: 'null'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
        'process.env': {
          'FB_APP_ID': 'foobar'
        }
    })
  ]
}
