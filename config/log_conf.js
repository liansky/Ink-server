/**
 * log4js 配置
 */
module.exports = {
  appenders: {
    stdout: {
      type: 'stdout'
    },
    access: {
      type: 'dateFile',
      filename: 'logs/access/access',
      pattern: '-yyyy-MM-dd.log',
      alwaysIncludePattern: true,
      maxLogSize: 20480
    },
    error: {
      type: 'dateFile',
      filename: 'logs/error/error',
      pattern: '-yyyy-MM-dd.log',
      alwaysIncludePattern: true,
      maxLogSize: 20480
    }
  },
  replaceConsole: true,

  categories: {
    default: { appenders: ['stdout','access'], level: 'debug' },// appenders:采用的appender,取appenders项,level:设置级别
    error: { appenders: ['stdout','error'], level: 'info' }
  }
}
