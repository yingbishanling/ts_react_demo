import { resolve } from 'path';
import { Configuration } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import forkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';

export const baseConfig: Configuration = {
  mode: 'development',
  context: resolve(__dirname, '../'),
  entry: [
    './src/index.tsx',
  ],
  resolve: {
    extensions: ['.js', '.tsx', '.ts', '.json'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, '../src/index.html'),
    }),
    new forkTsCheckerWebpackPlugin({
      typescript: {
        configFile: resolve(__dirname, '../src/tsconfig.json')
      }
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(tsx?|js)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          },
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            }
          }
        ],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                strictMath: true,
              },
            },
          },
        ],
      },
    ],
  },
};
