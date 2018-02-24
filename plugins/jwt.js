/**
 * 基于 jwt 标识用户
 */
const { promisify } = require('util')
const jwt = require('jsonwebtoken')
const config = require('../config')
const conf = config[process.env.NODE_ENV || 'development']

module.exports = {
  /**
   * jwt sign 签出token
   * @param payload
   * @returns {Promise.<string>}
   */
  async sign (payload) {
    // Nodejs 8 有一个新的工具函数 util.promisify() 他将一个接收回调函数参数的函数转换成一个返回Promise的函数
    return promisify(jwt.sign)(
      payload,
      conf.secret,
      { expiresIn: conf.jwtTimeOut }
    )
  },


  /**
   * jwt verify 验证token
   * @param token
   * @returns payload {object}
   */
  async verify (token) {
    const payload = await promisify(jwt.verify)(
      token,
      conf.secret,
    )

    delete payload.exp
    delete payload.iat
    return payload
  }

}
