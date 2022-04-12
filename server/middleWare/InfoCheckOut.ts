module.exports = async (ctx, next) => {
  console.log('aaa');
  await next();
};
