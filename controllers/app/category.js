const { User, Article, Category, Reply } = require('../../models/index');

/**
 * CategoryCtrl
 * 文章分类接口逻辑层
 */
class CategoryCtrl {

  /**
   * 创建
   */
  static create (ctx) {
    const { userId, title, content } = ctx.request.body;
  }


  /**
   * 删除
   */
  static delete (ctx) {

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

}

module.exports = CategoryCtrl;
