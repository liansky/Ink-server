const router = require('koa-router')()
const UserCtrl = require('../controllers/app/user')

router
  .get('/', async (ctx, next) => {
    await ctx.render('index', {
      title: 'Hello Koa 2!'
    })
  })
  .post('/api/user/login', UserCtrl.login)         // 登录
  .post('/api/user/register', UserCtrl.register)   // 注册
  .post('/api/user/userinfo', UserCtrl.userInfo)    // 更新用户信息

module.exports = router
