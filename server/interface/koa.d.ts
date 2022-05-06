import koa from 'koa';

interface ctxInter extends koa.ParameterizedContext {}
interface nextInter extends koa.Next {}
export { ctxInter, nextInter };
