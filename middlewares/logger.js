/**
 * logger 中间件
 */
const { isEmpty } = require('lodash');

module.exports = async (ctx, next) => {
  const start = new Date();
  let parameter = !isEmpty(ctx.request.query) ? ctx.request.query : ctx.request.body;

  ctx.logger.info(`${ctx.method} ${ctx.url}`);
  ctx.logger.info(Object.assign({'INFO':'--------------请求入参-------------'}, parameter));
  await next();

  const ms = new Date() - start;
  ctx.logger.info(`${ctx.method} ${ctx.url} - ${ms}ms`)
}