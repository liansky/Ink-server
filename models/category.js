/**
 * 类别
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId  = Schema.ObjectId;

const CategorySchema = new Schema({
  category_id: {type: ObjectId},                      // 列别id
  name: {type: String, required: true},               // 分类名称
  icon: {type: String},                               // 分类图标
  follow_count: {type: Number, default: 0},           // 关注数
  article_count: {type: Number, default: 0},          // 文章数
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

CategorySchema.index({category_id: 1}, {unique: true});

mongoose.model('category', CategorySchema);
