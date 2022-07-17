import * as http from 'http';
import Server = require('./koaServer/coreServer');
import { webSocket } from './koaServer/websocket';
import { PORT } from './config/config';
import errorHandle = require('./error/errorHandle');

const app = new Server();

app.use(errorHandle);

const server = http.createServer(app.callback());

webSocket({ server });

server.listen(PORT);
