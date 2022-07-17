import { ctxInter, nextInter } from '../interface/koa';

module.exports = async (ctx: ctxInter, next: nextInter) => {
  await next();
};
