import { getGlobalModel } from '@/koaServer/getGlobalModel';
import { ctxInter, nextInter } from '@/interface/koa';
import DefaultDraftInfo from '@/models/default/draft_info';

export = async function (ctx: ctxInter, next: nextInter) {
  const params = ctx.request.body;

  const dataModel: DefaultDraftInfo = getGlobalModel('default', 'draft_info');

  const result = await dataModel.selectDraftInfo(params);

  return {
    Code: 0,
    Message: 'success',
    Data: result.Data,
  };
};
