const mongoose = require('mongoose');
const config = require('../config');


mongoose.connect(config.mongo.uri);

// 连接成功
mongoose.connection.on('connected', function() {
  console.log('Mongoose connection open to ' + config.mongo.uri);
});

// 连接失败
mongoose.connection.on('error', function(err) {
  console.log('Mongoose connection error: ' + err);
});

// 断开连接
mongoose.connection.on('disconnected', function() {
  console.log('Mongoose connection disconnected');
});



// 引入models
require('./user');
require('./article');
require('./category');
require('./reply');
require('./message');


exports.User = mongoose.model('user');
exports.Article = mongoose.model('article');
exports.Category = mongoose.model('category');
exports.Reply = mongoose.model('reply');
exports.Message = mongoose.model('message');
