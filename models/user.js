/**
 * 用户表
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  token: {type: String, required: true},
  expire: {type: Date, default: Date.now, required: true},
  nickname: {type: String, required: true},
  name: {type: String, required: true},
  mobile: {type: String, default: ''},
  password: {type: String, required: true},
  profile: {type: String, default: ''},
  avatar: {type: String, default: ''},
  email: {type: String, default: ''},
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

mongoose.model('user', userSchema);
