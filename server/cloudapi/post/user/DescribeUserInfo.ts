import { getGlobalModel } from '@/koaServer/getGlobalModel';
import { ctxInter, nextInter } from '@/interface/koa';
import DefaultUserInter from '@/models/default/User';

export = async function (ctx: ctxInter, next: nextInter) {
  console.log(getGlobalModel);

  const dataModel: DefaultUserInter = getGlobalModel('default', 'user_info');

  const result = await dataModel.selectData();
  return result;
};
