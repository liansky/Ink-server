require('../../models')
const mongoose = require('mongoose')
const userModel = mongoose.model('User')
const md5 = require('md5')
const uuidV4 = require('uuid/v4')
const moment = require('moment')
const config = require('../../config')

/**
 * User
 * 用户及相关接口逻辑层
 */
class UserCtrl {

  /**
   * 注册
   */
  static async register (ctx) {
    const { name, nickname, password, apassword } = ctx.request.body

    // 参数验证
    if (!name) return ctx.error(ctx, ctx.msgInfo.INVALID_USER_NAME)
    if (!nickname) return ctx.error(ctx, ctx.msgInfo.INVALID_NICK_NAME)
    if (!password || password.length < 6) return ctx.error(ctx, ctx.msgInfo.INVALID_PASSWORD)
    if (password !== apassword) return ctx.error(ctx, ctx.msgInfo.INVALID_A_PASSWORD)

    // 验证用户是否注册
    const isHas = await userModel.findOne({ name })
    if (isHas) return ctx.error(ctx, ctx.msgInfo.MEMBER_IS_HAVE)

    const expireTime = moment().add(config.tokenTimeOut, 'seconds')
    const user = await userModel.create({ name, nickname, password: md5(password), token: uuidV4(), expire: expireTime })
    if (!user) return ctx.error(ctx, ctx.msgInfo.SERVER_EXCEPTION)

    return ctx.success(ctx)
  }


  /**
   * 登录
   */
  static async login (ctx) {
    const { name, password } = ctx.request.body

    if (!name || !password) return ctx.error(ctx, ctx.msgInfo.PARAMETER_ERROR)

    const expireTime = moment().add(config.tokenTimeOut, 'seconds')
    const token = uuidV4()
    const user = await userModel.findOneAndUpdate({name}, { token: token, expire: expireTime })
    if (!user) return ctx.error(ctx, ctx.msgInfo.MEMBER_IS_NONE)

    if (user.password !== md5(password)) return ctx.error(ctx, ctx.msgInfo.MEMBER_PASSWORD_ERROR)

    return ctx.success(ctx, { token: token, userId: user._id })
  }


  /**
   * 查询用户信息
   */
  static async personal (ctx) {
    const { userId, token } = ctx.request.query
    if (!token || !userId) return ctx.error(ctx, ctx.msgInfo.PARAMETER_ERROR)

    const user = await userModel.findById(userId , { password: 0 })
    if (!user) return ctx.error(ctx, ctx.msgInfo.MEMBER_IS_NONE)
    return ctx.success(ctx, user)
  }


  /**
   * 更新用户信息
   */
  static async updateUserInfo (ctx) {
    const { userId, token, email, mobile, profile, avatar, nickname } = ctx.request.body
    if (!token || !userId) return ctx.error(ctx, ctx.msgInfo.PARAMETER_ERROR)

    const updateInfo = {}
    if (email) updateInfo.email = email
    if (mobile) updateInfo.mobile = mobile
    if (profile) updateInfo.profile = profile
    if (avatar) updateInfo.avatar = avatar
    if (nickname) updateInfo.nickname = nickname

    const user = await userModel.findByIdAndUpdate(userId, updateInfo)
    if (!user) return ctx.error(ctx, ctx.msgInfo.MEMBER_IS_NONE)

    return ctx.success(ctx)
  }
}

module.exports = UserCtrl
