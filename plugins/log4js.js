const log4js_conf = require('../config/log_conf')
const log4js = require('log4js')

/**
 * 日志配置
 * @description 封装Log类
 */
class Logger {

  constructor() {
    log4js.configure(log4js_conf)
  }

  error (data) {
    const logger = log4js.getLogger('error');
    logger.error(JSON.stringify(data, null, '  '))
  }


  info (data) {
    const logger = log4js.getLogger('access');
    logger.info(JSON.stringify(data, null, '  '))
  }


  warn (data) {
    const logger = log4js.getLogger('access');
    logger.warn(JSON.stringify(data, null, '  '))
  }

  debug (data) {
    const logger = log4js.getLogger('access');
    logger.debug(JSON.stringify(data, null, '  '))
  }

}


module.exports = (app) => {
  app.context.logger = new Logger
}
