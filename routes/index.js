const router = require('koa-router')()
const UserCtrl = require('../controllers/app/user')

router
  .post('/api/user/login', UserCtrl.login)                        // 登录
  .post('/api/user/register', UserCtrl.register)                  // 注册
  .get('/api/user/personal', UserCtrl.personal)                   // 查询用户信息
  .post('/api/user/update/user_info', UserCtrl.updateUserInfo)    // 更新用户信息

module.exports = router
