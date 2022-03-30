const sequelize = require('sequelize');
const User = require('../models/User')
const connection = new sequelize(dbConfig);

User.init(connection)


module.exports = connection;