const mongoose  = require('mongoose');
const Schema    = mongoose.Schema;
const ObjectId  = Schema.ObjectId;

const ReplySchema = new Schema({
  content: { type: String },
  article_id: { type: ObjectId},
  author_id: { type: ObjectId },
  reply_id: { type: ObjectId },
  create_at: { type: Date, default: Date.now },
  update_at: { type: Date, default: Date.now },
  ups: [Schema.Types.ObjectId],
  deleted: {type: Boolean, default: false}
});

ReplySchema.index({article_id: 1});
ReplySchema.index({author_id: 1, create_at: -1});

mongoose.model('Reply', ReplySchema)
