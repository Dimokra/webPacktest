const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader'
            }
          },
          {
            test: /\.(png|jpe?g|gif|svg)$/i,
            type: 'asset/resource' 
          },
          {
            test: /\.(woff2?|eot|ttf|otf)$/i,
            type: 'asset/resource'
          },
          {
            test: /\.css$/i,
            use: [
              'style-loader',
              {
                loader: 'css-loader',
                options: { importLoaders: 1 }
              },
              'postcss-loader']},
        ],
          },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html'      
    })
  ],


devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 3000,
    open: true,
    hot: true, 
  }

};



    
  
  