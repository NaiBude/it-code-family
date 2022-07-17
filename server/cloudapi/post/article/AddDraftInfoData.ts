import { getGlobalModel } from '@/koaServer/getGlobalModel';
import { ctxInter, nextInter } from '@/interface/koa';
import DefaultDraftInfo from '@/models/default/draft_info';

export = async function (ctx: ctxInter, next: nextInter) {
  const dataModel: DefaultDraftInfo = getGlobalModel('default', 'draft_info');

  await dataModel.insertDraftInfo(ctx.request.body);

  return {
    Code: 0,
    Message: 'success',
    Data: null,
  };
};
