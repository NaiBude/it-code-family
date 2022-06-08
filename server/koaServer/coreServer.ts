import Koa from 'koa';
import bodyParser = require('koa-bodyparser');
import { initCloudApi } from './initCloudApi';
import { initMiddleWare } from './initMiddleWare';

// const bodyParser = new BodyParser();
class server extends Koa {
  init() {
    this.use(
      bodyParser({
        onerror(err, ctx) {
          ctx.throw('body parse error', 422);
        },
      }),
    );
    initMiddleWare(this);
    this.use(initCloudApi.routes()).use(initCloudApi.allowedMethods());
  }
}

export = server;
