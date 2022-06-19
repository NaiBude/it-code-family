import { ctxInter, nextInter } from '@/interface/koa';
import { getAvtarUrl } from '@/utils/cosOperate';
import { MessageInter } from '@/interface/message';

export = async function (ctx: ctxInter, next: nextInter) {
  const { query } = ctx;
  const message: MessageInter<{ Url: string }> = {
    Code: 0,
    Data: null,
    Message: '头像获取成功',
  };
  if (query?.photokey) {
    const key: string = query.photokey as string;
    const result = await getAvtarUrl(key);

    if (result.Url) {
      message.Data = result;
    } else {
      message.Code = -1;
      message.Message = '获取头像失败';
    }
  } else {
    message.Code = -1;
    message.Message = '获取头像失败';
  }
  ctx.body = {
    ...message,
  };
  await next();
};
