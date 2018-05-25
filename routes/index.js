const router = require('koa-router')();
const UserCtrl = require('../controllers/app/user');
const ArticleCtrl = require('../controllers/app/article');
const authToken = require('../middlewares/token');

router
  .post('/api/user/login', UserCtrl.login)                                        // 登录
  .post('/api/user/register', UserCtrl.register)                                  // 注册
  .get('/api/user/auth/personal', authToken, UserCtrl.personal)                   // 查询用户信息
  .post('/api/user/auth/update/info', authToken, UserCtrl.updateUserInfo)         // 更新用户信息


  .post('/api/article/auth/create', authToken, ArticleCtrl.create)                // 创建文章
  .post('/api/article/auth/update', authToken, ArticleCtrl.update)                // 更新
  .get('/api/article/query', ArticleCtrl.query)                                   // 查询
  .post('/api/article/auth/reply', authToken,ArticleCtrl.reply)                   // 回复
  .post('/api/article/auth/star', authToken,ArticleCtrl.star)                     // 喜欢
  .post('/api/article/auth/collect', authToken,ArticleCtrl.collect)               // 收藏

module.exports = router
