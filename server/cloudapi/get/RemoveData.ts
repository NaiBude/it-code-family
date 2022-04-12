module.exports = async function (ctx, next) {
  console.log('bbbb');
  ctx.body = '<h1>Remove</h1>';
  await next();
};
