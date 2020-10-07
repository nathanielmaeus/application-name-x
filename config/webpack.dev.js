const merge = require("webpack-merge");
const common = require("./webpack.common.js");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const path = require('path');

const options = {
  importLoaders: 3,
  esModule: true,
  modules: {
    localIdentName: "[name]__[local]___[hash:base64:5]",
  },
};

module.exports = merge(common, {
  mode: "development",

  devtool: "cheap-module-source-map",

  devServer: {
    compress: true,
    port: 9090,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: options,
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: options,
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
              sassOptions: {
                includePaths: [path.resolve(__dirname, "../src/styles")],
              }
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin("dist", {}),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
  ],
});
