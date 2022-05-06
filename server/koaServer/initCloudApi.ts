import { readdir } from 'fs/promises';
import * as Router from 'koa-router';

const initCloudApi = new Router();

readdir('./cloudapi').then(cloudapiDirs => {
  cloudapiDirs.forEach(method => {
    readdir(`./cloudapi/${method}`).then(methodPath => {
      methodPath.forEach(item => {
        try {
          const api = require(`../cloudapi/${method}/${item}`);
          const path = `/${item.split('.')[0]}`;
          if (typeof api === 'function') {
            initCloudApi[method](path, api);
          }
        } catch (error) {
          console.log(`Tip: The export was not found in the '../cloudapi/${method}/${item}'`);
        }
      });
    });
  });
});

export { initCloudApi };
