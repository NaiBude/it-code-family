import { getGlobalModel } from '@/koaServer/getGlobalModel';
import { ctxInter, nextInter } from '@/interface/koa';
import DefaultUserInter from '@/models/default/article_info';
import { getAvtarUrl } from '@/utils/cosOperate';
// import {a} from

export = async function (ctx: ctxInter, next: nextInter) {
  const { Filter = [], Sort = [], PageNumber = 0, PageSize = 0 } = ctx.request.body;

  const dataModel: DefaultUserInter = getGlobalModel('default', 'article_info');

  const result = await dataModel.selectData({ Filter, Sort, PageNumber, PageSize });

  let Data = [];

  if (result.Code === -1) {
    return {
      ...result,
    };
  }
  if (result.Code === 0) {
    const idList = [];
    const list = [];
    const mapList = {};
    result.Data.forEach(item => {
      if (item.photo_key) {
        idList.push(item.id);
        list.push(getAvtarUrl(item.photo_key));
      }
    });
    const res = await Promise.all([...list]);
    res.forEach((item, index) => {
      mapList[`${idList[index]}`] = item.Url;
    });
    Data = result.Data.map(item => {
      const url = mapList[`${item.id}`];
      return { ...item, url };
    });
    console.log(Data);
  }
  return {
    Code: 0,
    Message: 'success',
    Data,
  };
};
