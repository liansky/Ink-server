/**
 * 文章表
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId  = Schema.ObjectId;

const ArticleSchema = new Schema({
  article_id: { type: ObjectId },
  title: {type: String},
  author_id: { type: ObjectId },
  category_id: {type: ObjectId},
  reply_count: { type: Number, default: 0 },     // 评论数
  visit_count: { type: Number, default: 0 },     // 访问次数
  collect_count: { type: Number, default: 0 },   // 收藏数
  star_count: { type: Number, default: 0 },      // 喜欢数
  create_at: { type: Date, default: Date.now },
  update_at: { type: Date, default: Date.now },
  deleted: {type: Boolean, default: false}
});

ArticleSchema.index({create_at: -1});
ArticleSchema.index({category_id: 1, create_at: -1});
ArticleSchema.index({author_id: 1, create_at: -1});

mongoose.model('article', ArticleSchema);
