const {Model, DataTypes} = require('sequelize');

class User extends Model {
    static init(connection){
        super.init({
            nome: DataTypes.STRING,
            login: DataTypes.STRING,
        }, {
            sequelize: connection,
            tableName:'usuarios', 
            freezeTableName: true
        })
    }

}

module.exports = User;