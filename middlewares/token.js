/**
 * 验证token
 */
require('../models')
const mongoose = require('mongoose')
const userModel = mongoose.model('User')
const moment = require('moment')


module.exports = async (ctx, next) => {
  const token = ctx.request.body.token || ctx.request.query.token
  if (token) {
    const user = userModel.findOne({token})
    if (!user) return ctx.error(ctx, ctx.msgInfo.MEMBER_IS_NONE)

    const expireTime = moment().add(7, 'days')
    console.log(expireTime.format('YYYY-MM-DD hh:mm:sss'))
    console.log(user)
  }
  await next()
}