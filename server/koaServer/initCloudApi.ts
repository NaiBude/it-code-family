import { readdir } from 'fs/promises';
import * as Router from 'koa-router';

const initCloudApi = new Router();
const handleCloudApiPath = (method: string, parPath: string, path: string): void => {
  if (path.split('.').length === 2) {
    try {
      const api = require(`.${parPath}/${path}`);
      initCloudApi[method](
        `${parPath}/${path}`.replace(`./cloudapi/${method}`, '').split('.')[0],
        async (ctx, next) => {
          const res = await api(ctx, next);
          if (res) {
            ctx.body = { Code: 0, Message: 'success', ...res };
            next();
          }
        },
      );
      console.log('加载成功', `${parPath}/${path}'`);
    } catch (error) {
      console.log({ LOADMESSAGE: { error } });
      console.log(`Tip: The export was not found in the '${parPath}/${path}'`);
    }
  } else if (path) {
    readdir(`${parPath}/${path}`).then(res => {
      res.forEach(item => {
        if (item) {
          handleCloudApiPath(method, `${parPath}/${path}`, item);
        }
      });
    });
  }
};

readdir('./cloudapi').then(cloudapiDirs => {
  cloudapiDirs.forEach(method => {
    handleCloudApiPath(method, `./cloudapi`, method);
  });
});

export { initCloudApi };
