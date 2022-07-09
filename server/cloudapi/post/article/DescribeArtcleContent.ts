import { getGlobalModel } from '@/koaServer/getGlobalModel';
import { ctxInter, nextInter } from '@/interface/koa';
import DefaultUserInter from '@/models/default/article_info';

export = async function (ctx: ctxInter, next: nextInter) {
  const { ParentId, Id } = ctx.request.body;

  const dataModel: DefaultUserInter = getGlobalModel('default', 'article_info');

  const result = await dataModel.selectArticleContent({ ParentId, Id });

  if (result.Code === -2) {
    return {
      Code: -1,
      Message: '未知错误',
      Data: null,
    };
  }

  if (result.Code === -1) {
    return {
      Code: -1,
      Message: '参数错误',
      Data: null,
    };
  }

  return {
    Code: 0,
    Message: 'success',
    Data: result.Data,
  };
};
