import { getGlobalModel } from '../../../koaServer/getGlobalModel';
import { ctxInter, nextInter } from '../../../interface/koa';

export = async function (ctx: ctxInter, next: nextInter) {
  console.log(getGlobalModel);

  const dataModel = getGlobalModel('default', 'user');

  const result = await dataModel.selectData();
  ctx.body = result;
  await next();
};
