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
    devServer: {
      host: 'localhost',
      port: 8080,
      // enable HMR on the devServer
      hot: true,
      // fallback to root for other urls
      historyApiFallback: true,

      static: {
          publicPath: '/',
          directory: path.resolve(__dirname, 'build'), 
        },
      // inline: true,
      headers: { 'Access-Control-Allow-Origin': '*' },
      /**
       * proxy is required in order to make api calls to
       * express server while using hot-reload webpack server
       * routes api fetch requests from localhost:8080/api/* (webpack dev server)
       * to localhost:3000/api/* (where our Express server is running)
       */
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