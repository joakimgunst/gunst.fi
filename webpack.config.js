let path = require("path");
let webpack = require("webpack");
let ExtractTextPlugin = require("extract-text-webpack-plugin");
let HtmlWebpackPlugin = require("html-webpack-plugin");
let FaviconsWebpackPlugin = require("favicons-webpack-plugin");
let CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = function(env) {
  let production = env === "production";

  return {
    context: path.resolve(__dirname, "src"),
    entry: "./app.ts",
    output: {
      path: path.resolve("build"),
      filename: "bundle.js"
    },
    devtool: production ? "source-map" : "inline-source-map",
    stats: "minimal",
    devServer: {
      contentBase: false,
      stats: "minimal"
    },
    plugins: [
      new ExtractTextPlugin({
        filename: "bundle.css"
      }),
      new HtmlWebpackPlugin({
        template: "index.html",
        hash: true
      }),
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
        Popper: ["popper.js", "default"]
      }),
      new FaviconsWebpackPlugin("./images/favicon.png"),
      new CopyWebpackPlugin([
        { from: './.htaccess' },
        { from: './google39d86b19602cfc3b.html' },
        { from: './files/**/*' },
      ])
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
          test: /\.(png|jpeg|gif)$/,
          loader: "file-loader"
        },
        {
          test: /\.html$/,
          loader: "html-loader"
        }
      ]
    }
  };
};
