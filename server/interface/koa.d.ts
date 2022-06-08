import koa from 'koa';

interface ctxInter extends koa.ParameterizedContext {
  params: object;
}
interface nextInter extends koa.Next {}
export { ctxInter, nextInter };
