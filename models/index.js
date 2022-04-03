const sequelize = require('sequelize');
const User = require('./User')
const connection = new sequelize(DbConfig);


User.init(connection)


module.exports = connection;