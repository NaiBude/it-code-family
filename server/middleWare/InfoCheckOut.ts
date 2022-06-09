import { ctxInter, nextInter } from '../interface/koa';

module.exports = async (ctx: ctxInter, next: nextInter) => {
  console.log(ctx.path);
  console.log('aaa');
  await next();
};
