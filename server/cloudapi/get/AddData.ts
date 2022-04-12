const { getGlobalModel } = require('./../../koaServer/getGlobalModel');

module.exports = async function (ctx, next) {
  const acc = { a: 'gg' };
  // for (const key of acc) {
  //   console.log(key);
  // }
  const a = getGlobalModel('default', 'user');
  console.log('aaaa', await a.selectData());
  ctx.body = '<h1>hello world</h1>';
  await next();
};
