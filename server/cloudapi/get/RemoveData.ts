import { ctxInter, nextInter } from '../../interface/koa';

module.exports = async function (ctx: ctxInter, next: nextInter) {
  console.log('bbbb');
  ctx.body = '<h1>Remove</h1>';
  await next();
};
