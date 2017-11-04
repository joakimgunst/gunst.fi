var path = require("path");
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");

var stats = {
  chunks: false,
  children: false,
  modules: false,
  hash: false,
  version: false
};

module.exports = function(env) {
  var production = env === "production";

  return {
    entry: "./src/app.ts",
    output: {
      path: path.resolve("build"),
      filename: "bundle.js"
    },
    devtool: production ? "source-map" : "inline-source-map",
    stats: stats,
    devServer: {
      contentBase: false,
      stats: stats
    },
    plugins: [
      new ExtractTextPlugin({
        filename: "bundle.css"
      }),
      new HtmlWebpackPlugin({
        template: "./src/index.html",
        hash: true
      }),
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
        Popper: ["popper.js", "default"]
      })
    ],
    resolve: {
      modules: [path.resolve("node_modules")],
      extensions: [".ts", ".js"]
    },
    module: {
      loaders: [
        {
          test: /\.ts$/,
          include: path.resolve("src"),
          loader: "ts-loader"
        },
        {
          test: /\.(scss)$/,
          use: ExtractTextPlugin.extract({
            use: [
              {
                loader: "css-loader"
              },
              {
                loader: "postcss-loader",
                options: {
                  plugins: function() {
                    return [require("precss"), require("autoprefixer")];
                  }
                }
              },
              {
                loader: "sass-loader"
              }
            ]
          })
        },
        {
          test: /\.png$/,
          loader: "file-loader"
        },
        {
          test: /\.html$/,
          loader: "raw-loader"
        }
      ]
    }
  };
};
