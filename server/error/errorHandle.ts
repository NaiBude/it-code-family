import { ctxInter, nextInter } from '@/interface/koa';

// 抛出错误统一处理
const errorHandle = async (ctx: ctxInter, next: nextInter) => {
  try {
    await next();
  } catch (error) {
    if (error.code) {
      ctx.body = {
        Code: -1,
        Message: error.message,
        Data: null,
      };
    }
    console.error(error);
    ctx.body = {
      Code: -1,
      Message: '服务端未知异常',
      Data: null,
    };
  }
};

export = errorHandle;
