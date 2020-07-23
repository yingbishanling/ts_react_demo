import express from 'express';

import { useDevServer } from './middlewares/useDevServer';
import { devConfig } from './webpack.dev';

const app = express();

app.use(useDevServer(devConfig));

app.listen(3000, () => {
  console.log('launch webpack dev server success')
});
