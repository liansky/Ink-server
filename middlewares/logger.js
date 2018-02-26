/**
 * logger 中间件
 */
module.exports = async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  ctx.logger.info(`${ctx.method} ${ctx.url} - ${ms}ms`)
}