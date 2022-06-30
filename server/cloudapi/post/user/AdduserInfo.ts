import { getGlobalModel } from '@/koaServer/getGlobalModel';
import { ctxInter, nextInter } from '@/interface/koa';
import AddUserData from '@/models/default/user_private_info';
import { MessageInter } from '@/interface/message';

export = async function (ctx: ctxInter, next: nextInter) {
  const params = ctx.request.body;
  const dataModel: AddUserData = getGlobalModel('default', 'user_private_info');

  const result = await dataModel.insterUserData({ ...params });
  const message: MessageInter<any> = {
    Code: -1,
    Data: null,
    Message: '未知错误',
  };
  if (result.Code === -2) {
    message.Message = '用户名重复';
  } else if (result.Code === -1) {
    message.Message = '昵称重复';
  } else if (result.Code === 0) {
    message.Code = 0;
    message.Message = '注册成功';
  }
  return {
    ...message,
  };
};
