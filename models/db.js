/**
 * 数据库连接
 */
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