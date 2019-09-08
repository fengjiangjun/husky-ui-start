const VueLoaderPlugin = require('vue-loader/lib/plugin')
var MiniCssExtractPlugin = require('mini-css-extract-plugin')
var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const resolve = dir => path.join(__dirname, '.', dir)
module.exports = {
  entry: {
    'pc': resolve('site/pc/index.js'),
    'mobile': resolve('site/mobile/index.js')
  },
  output: {
    filename: '[name].[hash:6].js',
    path: resolve('dist'),
    chunkFilename: 'async_[name].js'
    //publicPath: '/dist/'
  },
  module: {
    rules: [{
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.md$/,
        use: ['vue-loader', '@vant/markdown-loader']
      },
      {
        test: /\.css$/,
        use: [
          true ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },


          {
            loader: 'less-loader',
            options: {
              sourceMap: true
            }
          }, {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          },
        ]
      },
      {
        test: /\.styl(us)?$/,
        use: [
          true ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },

          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          }, {
            loader: 'less-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'stylus-loader',
            options: {
              sourceMap: true
            }
          },
        ]
      },
      {
        test: /\.(png|svg|jpe?g)$/,
        loader: 'url-loader',
        options: {
          limit: 2192,
          name: '[name].[ext]'
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      }


    ]
  },
  resolve: {},
  plugins: [

    new VueLoaderPlugin(),

    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    new HtmlWebpackPlugin({
      chunks: ['pc'],
      template: resolve('site/pc/index.html'),
      filename: 'start.html'
    }),
    new HtmlWebpackPlugin({
      chunks: ['mobile'],
      template: resolve('site/mobile/index.html'),
      filename: 'mobile.html'
    })
  ],
  devServer: {
    port: 8089,
    open: true,

    // hot: true
  }

}