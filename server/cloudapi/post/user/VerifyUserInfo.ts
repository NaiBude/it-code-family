import { getGlobalModel } from '@/koaServer/getGlobalModel';
import { ctxInter, nextInter } from '@/interface/koa';
import { MessageInter } from '@/interface/message';
import { Encryption } from '@/utils/encoder';

export = async function (ctx: ctxInter, next: nextInter) {
  console.log('ctx.request.body', ctx.request.body);
  const data = ctx.request.body;
  const dataModel = getGlobalModel('default', 'user');
  const result = await dataModel.selectData();
  console.log(result);

  const message: MessageInter<null> = {
    Code: 0,
    Data: null,
    Message: '登陆成功',
  };

  if (result.data) {
    const userInfo = result.data.find(
      item => item.username === data.username && item.password === data.password,
    );
    if (userInfo) {
      console.log('登陆成功');
      const timer = Number(new Date());
      const ACCESSTOKEN = Encryption(`${timer}/7D/${data.username}`);
      const REFRESHTOKEN = Encryption(`${data.username}/3000000/${timer}`);
      ctx.cookies.set('ACCESSTOKEN', ACCESSTOKEN, {
        maxAge: 60 * 60 * 1000 * 24 * 7,
        httpOnly: true,
      });
      ctx.cookies.set('REFRESHTOKEN', REFRESHTOKEN, {
        maxAge: 60 * 1000 * 5,
        httpOnly: true,
      });
    } else {
      message.Code = -1;
      message.Message = '登陆失败,账号密码错误!';
    }
  } else {
    message.Code = -1;
    message.Message = '服务器出错!';
  }
  ctx.body = {
    ...message,
  };
  await next();
};
