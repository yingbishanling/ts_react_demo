import express from 'express';

import { useDevServer } from './middlewares/useDevServer';
import { baseConfig } from './webpack.base';

const app = express();

app.use(useDevServer(baseConfig));

app.listen(3000, () => {
  console.log('launch webpack dev server success')
});
