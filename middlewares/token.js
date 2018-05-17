/**
 * 验证token
 */
const userModel = require('../models').User;
const moment = require('moment');
const config = require('../config');


module.exports = async (ctx, next) => {
  const token = ctx.request.body.token || ctx.request.query.token
  const userId = ctx.request.body.userId || ctx.request.query.userId

  if (userId && token) {
    const user = await userModel.findById(userId)
    if (!user) return ctx.error(ctx, ctx.msgInfo.MEMBER_IS_NONE)

    const expireTime = new Date().getTime()
    const expireDbTime = new Date(user.expire).getTime()

    // 检查token是否过期、没有过期更新过期时间
    if (token !== user.token || expireTime - expireDbTime > 0) {
      return ctx.error(ctx, ctx.msgInfo.INVALID_TOKEN)
    } else {
      const nextExpireTime = moment().add(config.tokenTimeOut, 'seconds')
      try {
        await userModel.findByIdAndUpdate(userId, { expire: nextExpireTime })
      } catch (e) {
        ctx.logger.info(e.message)
      }
    }
  }
  await next()
}
