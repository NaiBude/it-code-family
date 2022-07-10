import { getGlobalModel } from '@/koaServer/getGlobalModel';
import { ctxInter, nextInter } from '@/interface/koa';
import DefaultUserInter from '@/models/default/article_info';

export = async function (ctx: ctxInter, next: nextInter) {
  const { Filter = [], Sort = [], PageNumber = 0, PageSize = 0 } = ctx.request.body;

  const dataModel: DefaultUserInter = getGlobalModel('default', 'article_info');

  const result = await dataModel.selectData({ Filter, Sort, PageNumber, PageSize });

  console.log('result', result);

  if (result.Code === -1) {
    return {
      ...result,
    };
  }

  return {
    Code: 0,
    Message: 'success',
    Data: result.Data,
  };
};
