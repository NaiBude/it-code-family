import { ctxInter, nextInter } from '@/interface/koa';
import { getAvtarUrl } from '@/utils/cosOperate';
import { MessageInter } from '@/interface/message';
import ErrMassage from '@/error';

export = async function (ctx: ctxInter, next: nextInter) {
  const { query } = ctx;
  const message: MessageInter<{ Url: string }> = {
    Code: 0,
    Data: null,
    Message: '头像获取成功',
  };

  if (query?.photo_key) {
    const key: string = query.photo_key as string;
    const result = await getAvtarUrl(key);

    if (result.Url) {
      return {
        Data: result,
      };
    }
    throw ErrMassage.NotPhotoResourse();
  }
  throw ErrMassage.NotPhotoResourse();
};
