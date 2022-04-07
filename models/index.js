const sequelize = require('sequelize');
const DbConfig = require('../config/configSequelize');
const User = require('./User')
const connection = new sequelize(DbConfig);


User.init(connection)


module.exports = { User };