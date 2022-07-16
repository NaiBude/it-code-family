import { ctxInter, nextInter } from '@/interface/koa';
import { MessageInter } from '@/interface/message';
import SelectChildTag from '@/models/default/tag_children_class';
import { getGlobalModel } from '@/koaServer/getGlobalModel';
import ErrMassage from '@/error';

export = async (ctx: ctxInter, next: nextInter) => {
  const params = ctx.request.body;
  const dataModel: SelectChildTag = getGlobalModel('default', 'tag_children_class');
  const result = await dataModel.selectTagChildData({ ...params });

  if (!params.belong) {
    throw ErrMassage.badRequestParams();
  }
  return {
    Data: result.Data,
  };
};
