/**
 * 用户表
 */
const mongoose = require('mongoose')
const Schema = mongoose.Schema

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
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model('User', userSchema)
