/**
 * 用户及相关接口逻辑层
 */
class UserCtrl {
  static login (ctx) {
    ctx.body = 'koa2 login'
  }

  static register (ctx) {
    ctx.body = 'koa2 register'
  }
}

module.exports = UserCtrl
