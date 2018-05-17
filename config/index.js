/**
 * 配置文件
 */
const config = {
  // 开发
  development: {
    mongo: {
      uri: `mongodb://localhost:27017/lnk`,
      username: '',
      password: ''
    },
    port: '9000',
    secret: 'lnk',
    tokenTimeOut: 9000
  },

  // 生产
  production: {
    mongo: {
      uri: `mongodb://localhost:27017/lnk`,
      username: '',
      password: ''
    },
    port: '8080',
    secret: 'lnk',
    tokenTimeOut: 60
  }
}

module.exports = config[process.env.NODE_ENV || 'development']