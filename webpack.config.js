// 核心
// eslint-disable-next-line no-unused-vars
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// 辅助
const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')

// 打包体积提示
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
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

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  mode: 'development',
  entry: {
    app: './src/main.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    overlay: {
      errors: true,
      warnings: true
    },
    host: '0.0.0.0',
    compress: true,
    port: 1314
  },
  module: {
    rules: [
      // vue处理
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      // css处理
      {
        test: /\.css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          'css-loader'
        ]
      },
      // stylus预处理css
      {
        test: /\.styl(us)?$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          'css-loader',
          'postcss-loader',
          'stylus-loader'
        ]
      },
      // 图片等资源loader配置
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'static/images/'
            }
          }
        ]
      },
      // 处理字体
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['url-loader']
      },
      // 处理ES5
      {
        test: /\.(jsx|js)$/,
        use: [
          {
            loader: 'babel-loader'
          }
        ],
        exclude: /node_modules/
      },
      // 使用ESlint
      {
        enforce: 'pre',
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.html',
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
      filename: 'static/css/[name].[chunkhash].css',
      chunkFilename: 'static/css/[id].[chunkhash].css'
    }),
    new BundleAnalyzerPlugin()
  ],
  output: {
    filename: 'static/js/[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist')
  },
  optimization: {
    splitChunks: {
      chunks: 'all', // 分割异步打包的代码，
      cacheGroups: {
        commons: {
          name: 'commons',
          chunks: 'all',
          minChunks: 2,
          priority: 0
        },
        vendor: {
          name: 'vendor',
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          priority: 10
        }
      }
    }
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'SRC': resolve('src'),
      'STATIC': resolve('static'),
      'IMAGES': resolve('src/assets/images'),
      'VIEWS': resolve('src/views'),
      'STYLUS': resolve('src/stylus'),
      'COMMON': resolve('src/common'),
      'API': resolve('src/api'),
      'UTIL': resolve('src/util'),
      'STORE': resolve('src/store'),
      'DATA': resolve('src/data'),
      'MIXINS': resolve('src/mixins')
    }
  },
  externals: {
    'vue': 'Vue',
    'vue-router': 'VueRouter',
    'vuex': 'Vuex'
  }
}
