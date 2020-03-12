const webpack = require("webpack");
const path = require("path");

let config = {
  
  entry: "./src/app.js",
  output: {
    path: path.resolve(__dirname, "./js"),
    filename: "./app.js"
  },
  devServer: {
    contentBase: path.join(__dirname, './'),
    compress: true,
    port: 8080
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                  'file-loader',
                ],
              }
      
    ],
  }
}

module.exports = config;