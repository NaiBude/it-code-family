import { ctxInter, nextInter } from '@/interface/koa';
import { MessageInter } from '@/interface/message';
import SelectChildTag from '@/models/default/tag_children_class';
import { getGlobalModel } from '@/koaServer/getGlobalModel';

export = async (ctx: ctxInter, next: nextInter) => {
  const params = ctx.request.body;
  const dataModel: SelectChildTag = getGlobalModel('default', 'tag_children_class');
  const result = await dataModel.selectTagChildData({ ...params });
  const message: MessageInter<any> = {
    Code: 0,
    Data: result,
    Message: '获取子类类标签成功',
  };

  return {
    ...message,
  };
};
