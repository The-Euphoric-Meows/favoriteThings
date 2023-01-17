const path = require ('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './client/index.js',
    output: {
      path: path.resolve(__dirname, 'build'),
      publicPath: '/',
      filename: 'bundle.js',
    },
    target: 'web',
    devServer: {
      host: 'localhost',
      port: 8080,
      // hot: true,
      liveReload:true,
      historyApiFallback: true,

      static: {
          publicPath: '/',
          directory: path.resolve(__dirname, 'build'), 
        },
      headers: { 'Access-Control-Allow-Origin': '*' },

      proxy: {
        '/api/**': {
          target: 'http://localhost:1963/',
          secure: false,
        }
      },
     },
    module: {
      rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      }
    ]
},
  plugins: [
      new HtmlWebpackPlugin({
          template: './client/index.html'
      })],
};