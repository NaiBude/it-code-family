import { getGlobalModel } from '@/koaServer/getGlobalModel';
import { ctxInter, nextInter } from '@/interface/koa';
import DefaultAuditInfo from '@/models/default/audit_info';

export = async function (ctx: ctxInter, next: nextInter) {
  const params = ctx.request.body;

  const dataModel: DefaultAuditInfo = getGlobalModel('default', 'audit_info');

  const result = await dataModel.selectAuditInfo(params);

  return {
    Code: 0,
    Message: 'success',
    Data: result.Data,
  };
};
