require('../../models')
const mongoose = require('mongoose')
const userModel = mongoose.model('User')
const md5 = require('md5')
const jwt = require('../../plugins/jwt')
const uuidV4 = require('uuid/v4')
const moment = require('moment')

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

    const expireTime = moment().add(7, 'days')
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

    const user = await userModel.findOne({name})
    if (!user) return ctx.error(ctx, ctx.msgInfo.MEMBER_IS_NONE)

    if (user.password !== md5(password)) return ctx.error(ctx, ctx.msgInfo.MEMBER_PASSWORD_ERROR)

    const token = await jwt.sign({ id: user._id }) // 根据用户id生成token
    return ctx.success(ctx, { token })
  }


  /**
   * 查询用户信息
   */
  static async personal (ctx) {
    const { token } = ctx.request.query

    const payload = await jwt.verify(token)
    if (!payload) return ctx.error(ctx, ctx.msgInfo.INVALID_TOKEN)

    const user = await userModel.findById(payload.id , { password: 0 })
    if (!user) return ctx.error(ctx, ctx.msgInfo.MEMBER_IS_NONE)
    return ctx.success(ctx, user)
  }


  /**
   * 更新用户信息
   */
  static async updateUserInfo (ctx) {
    const { token, email, mobile, profile, avatar, nickname } = ctx.request.body

    const payload = await jwt.verify(token)
    if (!payload) return ctx.error(ctx, ctx.msgInfo.INVALID_TOKEN)

    const updateInfo = {}
    if (email) updateInfo.email = email
    if (mobile) updateInfo.mobile = mobile
    if (profile) updateInfo.profile = profile
    if (avatar) updateInfo.avatar = avatar
    if (nickname) updateInfo.nickname = nickname

    const user = await userModel.findByIdAndUpdate(payload.id, updateInfo)
    ctx.logger.debug(user)
    if (!user) return ctx.error(ctx, ctx.msgInfo.MEMBER_IS_NONE)

    return ctx.success(ctx)
  }
}

module.exports = UserCtrl
