const router = require('koa-router')()
const UserCtrl = require('../controllers/app/user')

router
  .get('/', async (ctx, next) => {
    await ctx.render('index', {
      title: 'Hello Koa 2!'
    })
  })
  .get('/api/user/login', UserCtrl.login)         // 登录
  .get('/api/user/register', UserCtrl.register)   // 注册

module.exports = router
