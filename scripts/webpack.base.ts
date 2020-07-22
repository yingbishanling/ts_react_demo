import { resolve } from 'path';
import webpack, { Configuration } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import forkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';

export const baseConfig: Configuration = {
  mode: 'development',
  context: resolve(__dirname, '../'),
  entry: [
    './src/index.tsx',
    'webpack-hot-middleware/client',
  ],
  output: {
    publicPath: '/',
    path: resolve(__dirname, '../dist'),
    filename: '[name]-[hash].bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, '../src/index.html'),
    }),
    new webpack.HotModuleReplacementPlugin(),
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
    ],
  },
};
