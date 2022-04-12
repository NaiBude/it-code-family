import Server = require('./koaServer/coreServer');

import { PORT } from './config/config';

const app = new Server();

app.init();

app.use(async (ctx, next) => {
  await next();
});

app.listen(PORT);
