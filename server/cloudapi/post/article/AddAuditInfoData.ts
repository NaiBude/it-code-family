import { getGlobalModel } from '@/koaServer/getGlobalModel';
import { ctxInter, nextInter } from '@/interface/koa';
import DefaultAuditInfo from '@/models/default/audit_info';

export = async function (ctx: ctxInter, next: nextInter) {
  const dataModel: DefaultAuditInfo = getGlobalModel('default', 'audit_info');

  await dataModel.insertAuditInfo(ctx.request.body);

  return {
    Data: null,
  };
};
