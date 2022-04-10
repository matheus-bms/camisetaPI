const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {



class User extends Model {
    static associate(models){
        
    }
   
     
    

}
   User.init({
            nome: DataTypes.STRING,
            login: DataTypes.STRING,
            nascimento: DataTypes.DATEONLY,
            senha: DataTypes.STRING,
            contato: DataTypes.STRING,
            shop: DataTypes.STRING,
            detalhesDoProduto: DataTypes.STRING,
            checkout: DataTypes.STRING,
            carrinho:DataTypes.STRING

        }, {
            sequelize,
            tableName:'usuarios', 
            freezeTableName: true,
            timestamps: false,
        })
return User;
}