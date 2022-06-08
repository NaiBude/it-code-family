import { ctxInter, nextInter } from '@/interface/koa';

module.exports = async (ctx: ctxInter, next: nextInter) => {
  // const timer = Number(new Date());
  // const str = timer + '/user' + '/admin';
  // const buf = Buffer.from(str);
  // const bufStr = buf.toString('base64');
  // let editorStr = '';
  // for (let i = 0; i < bufStr.length; i++) {
  //   editorStr += bufStr[i];
  //   if ((i + 1) % 4 === 0) {
  //     editorStr += bufStr[Math.floor(Math.random() * bufStr.length)];
  //   }
  // }
  // let beDecoded = '';
  // for (let i = 0; i < editorStr.length; i++) {
  //   if ((i + 1) % 5 !== 0) {
  //     beDecoded += editorStr[i];
  //   }
  // }
  // console.log(editorStr);
  // const hhh = Buffer.from(beDecoded, 'base64');
  // console.log(hhh.toString());
  // ctx.cookies.set('ACCESSTOKEN', editorStr.toString('base64'));
  // ctx.cookies.set('refreshToken', 'aaaa');
  // ctx.body = 'hahua';
  await next();
};
