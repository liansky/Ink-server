/**
 * 接口返回信息封装
 */
const msgInfo = {
  SUCCESS:{code:0, msg:"成功", msgCode:"SUCCESS"},
  SERVER_EXCEPTION:{code:1, msg:"服务器异常,请稍候再试...",msgCode:"SERVER_EXCEPTION"},

  /**
   * 通用字段 1000开始
   */
  PARAMETER_ERROR:{
    code:1000,msg:"请求参数异常", msgCode:"INVALID_PARAMETER"
  },
  INVALID_USER_NAME:{
    code:1001, msg:"用户名不能为空", msgCode:"INVALID_USER_NAME"
  },
  INVALID_PASSWORD:{
    code:1002, msg:"密码须为6-16位数字或字母",msgCode:"INVALID_PASSWORD"
  },
  INVALID_A_PASSWORD:{
    code:1003, msg:"两次输入的密码不一致",msgCode:"INVALID_A_PASSWORD"
  },
  INVALID_NICK_NAME:{
    code:1004, msg:"昵称不能为空", msgCode:"INVALID_NICK_NAME"
  },
  INVALID_TOKEN:{
    code:1005, msg:"无效token", msgCode:"INVALID_TOKEN"
  },

  MEMBER_IS_HAVE: {
    code:2000, msg:"用户名已注册", msgCode:"MEMBER_IS_HAVE"
  },
  MEMBER_IS_NONE: {
    code:2001, msg:"用户未注册", msgCode:"MEMBER_IS_NONE"
  },
  MEMBER_PASSWORD_ERROR: {
    code:2002, msg:"密码输入错误", msgCode:"MEMBER_PASSWORD_ERROR"
  }

}

module.exports = (app) => {
  app.context.msgInfo = msgInfo

  /**
   * 统一处理成功返回
   * @param ctx koa 上下文
   * @param data 需要返回的数据
   */
  app.context.success = (ctx, data) => {
    ctx.logger.info(
      Object.assign({'INFO':'--------------------接口成功返回值--------------------'},{
        code: msgInfo['SUCCESS']['code'],
        msg: msgInfo['SUCCESS']['msg'],
        data: data || {}
      })
    )
    ctx.body = {
      code: msgInfo['SUCCESS']['code'],
      msg: msgInfo['SUCCESS']['msg'],
      data: data || {}
    }
  }


  /**
   *  统一处理错误返回
   * @param ctx koa 上下文
   * @param errStr 错误类型
   */
  app.context.error = (ctx, errStr) => {
    const data = {
      code: '',
      msg: '',
      data: {}
    }

    if (errStr !== undefined && msgInfo[errStr]) {
      data.code = msgInfo[errStr]['code'];
      data.msg = msgInfo[errStr]['msg'];
    }

    ctx.logger.info(
      Object.assign({'INFO':'--------------------接口失败返回值--------------------'}, data)
    )

    ctx.body = data
  }

}
