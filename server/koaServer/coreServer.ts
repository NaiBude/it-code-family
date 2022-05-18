import Koa from 'koa';
import { initCloudApi } from './initCloudApi';
import { initMiddleWare } from './initMiddleWare';

class server extends Koa {
  init() {
    initMiddleWare(this);
    this.use(initCloudApi.routes()).use(initCloudApi.allowedMethods());
  }
}

export = server;
