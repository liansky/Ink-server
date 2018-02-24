/**
 * 接口返回信息封装
 */
const loger = require('./log4js')

const msgInfo = {
  SUCCESS:{code:0, msg:"成功", msgCode:"SUCCESS"},
  SERVER_EXCEPTION:{code:1, msg:"服务器异常,请稍候再试...",msgCode:"SERVER_EXCEPTION"},

  /**
   * 通用字段 1000开始
   */
  NO_MOBILE:{
    code:1000,msg:"无效的手机号码", msgCode:"INVALID_MOBILE"
  },
  INVALID_USER_NAME:{
    code:1001, msg:"用户名须为6-16位数字或字母", msgCode:"INVALID_USER_NAME"
  },
  INVALID_PASSWORD:{
    code:1002, msg:"密码须为6-16位数字或字母",msgCode:"INVALID_PASSWORD"
  },
  PARAMETER_ERROR:{
    code:1003, msg:"请求参数异常", msgCode:"INVALID_PARAMETER"
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


/**
 * @description 接口调用成功封装信息
 * @param res response对象
 * @param data 需要返回的数据
 */
module.exports.success = (res, data) =>{

  loger.info(
    Object.assign({'INFO':'--------------------接口成功返回值--------------------'},{
      code:msgInfo['SUCCESS']['code'],
      msg:msgInfo['SUCCESS']['msg'],
      data: data || {}
    })
  )

  res.json({
    code:msgInfo['SUCCESS']['code'],
    msg:msgInfo['SUCCESS']['msg'],
    data:data
  })

}

/**
 * @description 接口失败封装信息
 * @param res
 * @param errStr
 */
module.exports.error = (res,errStr) => {
  const data = {
    code: '',
    msg: '',
    data: {}
  }

  if (errStr !== undefined && msgInfo[errStr]) {
    data.code = msgInfo[errStr]['code'];
    data.msg = msgInfo[errStr]['msg'];
    loger.error(msgInfo[errStr])
  }

  loger.info(
    Object.assign({'INFO':'--------------------接口失败返回值--------------------'}, data)
  )
  res.json(data)
}
