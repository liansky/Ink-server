const fs = require('fs-extra')
const log4js_conf = require('../config/log_conf')
const log4js = require('log4js')

/**
 * 日志配置
 * @description 封装Log类
 */
class Log{

  /**
   * @description Util类构造方法
   */
  constructor() {

    for(var i=0,len=log4js_conf.appenders.length; i<len; i++){
      if(log4js_conf.appenders[i].category){
        fs.ensureDirSync('./logs/'+log4js_conf.appenders[i].category)
      }
    }

    log4js.configure(log4js_conf)
  }

  /**
   * error级日志接口，调用该方法前必须确保已经configure过
   * @returns {Logger}
   */
  error (data) {
    const dateFileLog = log4js.getLogger('error');
    dateFileLog.error(JSON.stringify(data,null,'  '))
  }


  /**
   * Info级日志接口，调用该方法前必须确保已经configure过
   * @returns {Logger}
   */
  info (data) {
    const dateFileLog = log4js.getLogger('access');
    dateFileLog.info(JSON.stringify(data,null,'  '))
  }


  /**
   * Warn级日志接口，调用该方法前必须确保已经configure过
   * @returns {Logger}
   */
  warn (data) {
    const dateFileLog = log4js.getLogger('access');
    dateFileLog.warn(JSON.stringify(data,null,'  '))
  }

}

module.exports = new Log
