import { readdir } from 'fs/promises';
import koa = require('koa');
/**
 *
 * @param {Object} context
 *  初始化中间间
 */
const initMiddleWare = context => {
  readdir('./middleWare').then(middleWareDirs => {
    middleWareDirs.forEach(item => {
      try {
        const middleware = require(`../middleWare/${item}`);
        if (typeof middleware === 'function') {
          context.use(middleware);
        }
      } catch (error) {
        console.log(`Tip: The export was not found in the '../middleWare/${item}'`);
      }
    });
  });
};

module.exports = { initMiddleWare };
