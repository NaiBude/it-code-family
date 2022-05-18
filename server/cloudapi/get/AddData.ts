import * as getGlobalModel from './../../koaServer/getGlobalModel';
import { ctxInter, nextInter } from '../../interface/koa';

module.exports = async function (ctx: ctxInter, next: nextInter) {
  // const acc = { a: 'gg' };
  const a = getGlobalModel('default', 'user');
  console.log('aaaa', await a.selectData());
  ctx.body = '<h1>hello world</h1>';
  await next();
};
