import Server = require('./koaServer/coreServer');

import { PORT } from './config/config';

const app = new Server();

app.init();

app.listen(PORT);

console.log(`App starting successfully at : localhost:${PORT}`);
