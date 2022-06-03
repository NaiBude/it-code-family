import { getGlobalModel } from './../../koaServer/getGlobalModel';
import { ctxInter, nextInter } from '../../interface/koa';

module.exports = async function (ctx: ctxInter, next: nextInter) {
  const dataModel = getGlobalModel('default', 'user');
  const result = await dataModel.selectData();
  ctx.body = result;
  ctx.body = 'result';
  await next();
};
