import { getGlobalModel } from '@/koaServer/getGlobalModel';
import { ctxInter, nextInter } from '@/interface/koa';
import AddUserData from '@/models/default/user_private_info';
import { MessageInter } from '@/interface/message';

export = async function (ctx: ctxInter, next: nextInter) {
  const params = ctx.request.body;
  const dataModel: AddUserData = getGlobalModel('default', 'user_private_info');
  const message: MessageInter<any> = {
    Code: -1,
    Data: null,
    Message: '未知错误',
  };
  const result = await dataModel.insterUserData({ ...params });
  console.log('AddUserInfo====', result, 'params===', params);

  switch (result.Code) {
    case -2:
      message.Code = -2;
      message.Message = '用户名重复';
      break;
    case 0:
      message.Code = 0;
      if (params.nickname === '' || params.username === '' || params.password === '') {
        message.Message = '请填写完整内容';
      } else {
        message.Message = '注册成功';
      }

      break;

    default:
      message.Message = '昵称重复';
      break;
  }
  return {
    ...message,
  };
};
