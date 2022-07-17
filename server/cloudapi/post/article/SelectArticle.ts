import { ctxInter, nextInter } from '@/interface/koa';
import { MessageInter } from '@/interface/message';
import ArticleInfo from '@/models/default/article_info';
import { getGlobalModel } from '@/koaServer/getGlobalModel';

export = async (ctx: ctxInter, next: nextInter) => {
  const params = ctx.request.body;
  const dataModel: ArticleInfo = getGlobalModel('default', 'article_info');
  const result = await dataModel.SelectArticleData({ ...params });
  const message: MessageInter<any> = {
    Code: 0,
    Data: result,
    Message: '获取文章成功',
  };

  return {
    ...message,
  };
};
