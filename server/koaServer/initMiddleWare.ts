import { readdir } from 'fs/promises';
/**
 *
 * @param {Object} context
 *  初始化中间间
 */
const initMiddleWare = (context, callback) => {
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
    callback();
  });
};

export { initMiddleWare };
