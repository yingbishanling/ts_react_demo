import webpack, { Configuration } from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

export const useDevServer = (config: Configuration) => {

  const compiler = webpack(config);

  const devMiddleware = webpackDevMiddleware(compiler, {
    publicPath: config.output?.publicPath || '',
    stats: 'minimal'
  });

  const hotMiddleware = webpackHotMiddleware(compiler);

  return [devMiddleware, hotMiddleware];
};
