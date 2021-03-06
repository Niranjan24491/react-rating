const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  entry: {
    app: "./src/index.jsx"
  },
  devtool: "inline-source-map",
  output: {
    path: path.join(__dirname, "www"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        use: ["babel-loader"],
        include: [path.resolve(__dirname, "src")]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "sass-loader"
          }
        ],
        include: [path.resolve(__dirname, "src")]
      },
      {
        test: /\.(?:png|jpg|svg)$/,
        loader: "url-loader"
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "www"),
    publicPath: "/"
  },
  resolve: {
    extensions: [".js", ".jsx", ".scss"]
  },
  plugins: [
    new CleanWebpackPlugin(["www"]),
    new HtmlWebpackPlugin({
      title: "Development",
      template: "./src/index.html"
    })
  ]
};
