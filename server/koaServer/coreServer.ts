import Koa = require('koa');
const { initCloudApi } = require('./initCloudApi');
const { initMiddleWare } = require('./initMiddleWare');

class server extends Koa {
  init() {
    initMiddleWare(this);
    this.use(initCloudApi.routes()).use(initCloudApi.allowedMethods());
  }
}

export = server;
