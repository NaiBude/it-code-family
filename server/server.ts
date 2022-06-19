import * as http from 'http';
import Server = require('./koaServer/coreServer');
import { webSocket } from './koaServer/websocket';
import { PORT } from './config/config';

const app = new Server();

const server = http.createServer(app.callback());

webSocket({ server });

server.listen(PORT);

console.log(`App starting successfully at : localhost:${PORT}`);
