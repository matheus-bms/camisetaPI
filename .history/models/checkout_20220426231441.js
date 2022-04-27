
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {



    class users extends Model {
        static associate(models) {

        }




    }
    User.init({
        user_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nome: DataTypes.STRING,
        register: DataTypes.STRING,
        nascimento: DataTypes.DATEONLY,
        senha: DataTypes.STRING,
        contato: DataTypes.STRING,
        shop: DataTypes.STRING,
        detalhesdoproduto: DataTypes.STRING,
        checkout: DataTypes.STRING,
        cart: DataTypes.STRING

    }, {
        sequelize,
        tableName: 'checkout',
        freezeTableName: true,
        timestamps: false,

    })
    return ;
}