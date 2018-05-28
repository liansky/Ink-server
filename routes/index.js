const router = require('koa-router')();
const authToken = require('../middlewares/token');
const UserCtrl = require('../controllers/app/user');
const ArticleCtrl = require('../controllers/app/article');
const CategoryCtrl = require('../controllers/app/category');


router
  .post('/api/user/login', UserCtrl.login)                                        // 登录
  .post('/api/user/register', UserCtrl.register)                                  // 注册
  .get('/api/user/auth/personal', authToken, UserCtrl.personal)                   // 查询用户信息
  .post('/api/user/auth/update/info', authToken, UserCtrl.updateUserInfo)         // 更新用户信息

  .post('/api/article/auth/create', authToken, ArticleCtrl.create)                // 创建文章
  .post('/api/article/auth/update', authToken, ArticleCtrl.update)                // 更新
  .post('/api/article/auth/del', authToken, ArticleCtrl.delete)                   // 删除
  .get('/api/article/query', ArticleCtrl.query)                                   // 查询
  .post('/api/article/auth/reply', authToken,ArticleCtrl.reply)                   // 回复
  .post('/api/article/auth/star', authToken,ArticleCtrl.star)                     // 喜欢
  .post('/api/article/auth/collect', authToken,ArticleCtrl.collect)               // 收藏

  .post('/api/category/auth/create', authToken,CategoryCtrl.create)               // 添加分类
  .post('/api/category/auth/del', authToken,CategoryCtrl.delete)                  // 删除分类
  .post('/api/category/auth/update', authToken,CategoryCtrl.update)               // 更新分类
  .get('/api/category/query', CategoryCtrl.query)                                 // 查询分类

module.exports = router
