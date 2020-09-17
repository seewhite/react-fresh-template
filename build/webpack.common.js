/*
 * @Description: webpack 4配置文件
 * @Author: hasayake
 * @Date: 2020-04-26 11:37:38
 * @LastEditTime: 2020-09-16 16:49:51
 * @LastEditors: Please set LastEditors
 */

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin')

module.exports = NODE_ENV => {
  const ISDEV = NODE_ENV === 'development'

  return {
    entry: './src/index.js',

    resolve: {
      alias: {
        '@': path.resolve(__dirname, '../src/'),
        '@cpts': path.resolve(__dirname, '../src/components/'),
        '@imgs': path.resolve(__dirname, '../src/assets/images/')
      }
    },

    module: {
      rules: [
        {
          test: /\.m?jsx?$/,
          exclude: /(node_modules|bower_components)/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                cacheDirectory: true,
                plugins: [ISDEV && require.resolve('react-refresh/babel')].filter(Boolean)
              }
            },
            {
              loader: 'eslint-loader',
              options: {
                cache: false,
                fix: false // 慎用，存在与编辑器插件冲突的可能
              }
            }
          ]
        },
        {
          test: /\.(css|less)$/,
          use: [
            /**
             * 开发环境时，不从 bundle 中抽离 css
             */
            ISDEV
              ? 'style-loader'
              : {
                loader: MiniCssExtractPlugin.loader,
                options: {
                  publicPath: '../',
                  hmr: false
                }
              },
            {
              loader: 'css-loader',
              options: {
                modules: {
                  mode: 'local',
                  exportGlobals: true,
                  localIdentName: '[local]-[hash:base64:5]',
                  auto: rsPath => !(rsPath.endsWith('antd.less'))
                },
                importLoaders: 2
              }
            },
            'postcss-loader',
            {
              loader: 'less-loader',
              options: {
                lessOptions: {
                  javascriptEnabled: true
                }
              }
            }
          ]
        },
        {
          test: /\.(png|svg|jpe?g|gif|webp)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 2048,
                name: '[name]-[hash:8].[ext]',
                outputPath: 'images'
                // publicPath: '../images'
              }
            }
          ]
        },
        {
          test: /\.(woff2?|eot|ttf)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 2048,
                name: '[name]-[contenthash:8].[ext]',
                outputPath: 'fonts'
              }
            }
          ]
        }
      ]
    },

    plugins: [
      // development 模式下并不会启用
      new MiniCssExtractPlugin({
        filename: 'styles/[name]-[contenthash:8].css'
      }),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, '../src/index.html')
      }),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, '../src/public/'),
            to: 'public',
            noErrorOnMissing: true
          }
        ]
      }),
      // 替换为 dayjs
      new AntdDayjsWebpackPlugin(),
      new CleanWebpackPlugin()
    ],

    output: {
      filename: 'index.js',
      publicPath: '/',
      chunkFilename: 'js/[name]-[contentHash:8].bundle.js',
      path: path.resolve(__dirname, '../dist')
    },

    optimization: {
      runtimeChunk: true,
      splitChunks: {
        chunks: 'all',
        minChunks: 2,
        maxSize: 500000,
        maxInitialRequests: 5,
        cacheGroups: {
          particles: {
            test: /tsparticles/,
            minChunks: 1,
            priority: 10
          }
        }
      }
    }
  }
}
