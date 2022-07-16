import { ctxInter, nextInter } from '@/interface/koa';
import { MessageInter } from '@/interface/message';
import SelectTag from '@/models/default/tag_parent_class';
import { getGlobalModel } from '@/koaServer/getGlobalModel';

export = async (ctx: ctxInter, next: nextInter) => {
  const params = ctx.request.body;
  const dataModel: SelectTag = getGlobalModel('default', 'tag_parent_class');
  const result = await dataModel.selectTagData({ ...params });

  return {
    Data: result.Data,
    Message: '获取父类标签成功',
  };
};
