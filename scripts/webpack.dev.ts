import { Configuration, HotModuleReplacementPlugin } from 'webpack';
import { merge } from 'webpack-merge';
import { resolve } from 'path';

import { baseConfig } from './webpack.base';

const config: Configuration = {
  mode: 'development',
  entry: [
    'webpack-hot-middleware/client',
  ],
  output: {
    publicPath: '/',
    path: resolve(__dirname, '../dist'),
    filename: '[name]-[hash].bundle.js',
  },
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new HotModuleReplacementPlugin(),
  ],
}

export const devConfig = merge(baseConfig, config);
