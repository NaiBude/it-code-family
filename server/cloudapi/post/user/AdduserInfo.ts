import { getGlobalModel } from '@/koaServer/getGlobalModel';
import { ctxInter, nextInter } from '@/interface/koa';
import AddUserData from '@/models/default/user_private_info';

export = async function (ctx: ctxInter, next: nextInter) {
  const dataModel: AddUserData = getGlobalModel('default', 'user_private_info');

  const result = await dataModel.insterUserData();

  return result;
};
