import { getGlobalModel } from '../../../koaServer/getGlobalModel';
import { ctxInter, nextInter } from '@/interface/koa';
import { MessageInter } from '@/interface/message';

export = async function (ctx: ctxInter, next: nextInter) {
  console.log('ctx.request.body', ctx.request.body);
  const data = ctx.request.body;
  const dataModel = getGlobalModel('default', 'user');
  const result = await dataModel.selectData();
  console.log(result);

  if (result.data) {
    const userInfo = result.data.find(
      item => item.username === data.username && item.password === data.password,
    );
    if (userInfo) {
      console.log('登陆成功');
    }
  }

  const message: MessageInter<null> = {
    Code: 0,
    Data: null,
    message: '登录成功',
  };
  ctx.body = {
    ...message,
  };
  await next();
};
