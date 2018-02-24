/**
 * 配置文件
 */
module.exports = {
  // 开发
  development: {
    mongo: {
      uri: `mongodb://localhost:27017/lnk`,
      username: '',
      password: ''
    },
    port: '9000',
    secret: 'lnk',
    jwtTimeOut: '7d'
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
    jwtTimeOut: '7d'
  }
}