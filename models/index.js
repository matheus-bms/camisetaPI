const sequelize = require('sequelize');
const DbConfig = require('../camisetaPI');
const User = require('/User')
const connection = new sequelize(DbConfig);


User.init(connection)


module.exports = connection;