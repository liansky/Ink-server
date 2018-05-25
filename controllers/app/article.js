const { User, Article, Category, Reply } = require('../../models');

/**
 * ArticleCtrl
 * 文章及相关接口逻辑层
 */
class ArticleCtrl {

  /**
   * 创建
   */
  static create (ctx) {
    const { userId, title, content } = ctx.request.body;
  }


  /**
   * 更新
   */
  static update (ctx) {

  }


  /**
   * 查询
   */
  static query (ctx) {

  }


  /**
   * 评论
   */
  static reply (ctx) {

  }


  /**
   * 给文章点赞
   */
  static star (ctx) {

  }

  /**
   * 收藏
   */
  static collect () {

  }

}

module.exports = ArticleCtrl;
