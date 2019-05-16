// 核心
const webpack = require("webpack");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// 辅助
const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");

// 环境
// if(process.env.type=="dev"){//本地环境
//   var website = {
//       publicPath: 'http://192.168.27.21:8080/'
//   }
// }else{
//   var website = {
//       publicPath: 'http://*****' //你的线上地址
//   }
// }

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  mode: "development",
  entry: {
    app: "./src/main.js"
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist"
  },
  module: {
    rules: [
      // vue处理
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      // css处理
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          "css-loader"
        ]
      },
      // stylus预处理css
      {
        test: /\.styl$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          "css-loader",
          "postcss-loader",
          "stylus-loader"
        ]
      },
      // 图片等资源loader配置
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "images/"
            }
          }
        ]
      },
      // 处理字体
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"]
      },
      // 处理ES5
      {
        test: /\.(jsx|js)$/,
        use: [
          {
            loader: "babel-loader"
          }
        ],
        exclude: /node_modules/
      }
    ]
  },

  plugins: [
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./index.html",
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      }
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "css/[name].css",
      chunkFilename: "css/[id].css"
    })
  ],
  output: {
    filename: "js/[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    host: "localhost",
    compress: true,
    port: 13167
  }
};
