const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {



class User extends Model {
    static associate(models){
        
    }
   
     
    

}
   User.init({
            nome: DataTypes.STRING,
            register: DataTypes.STRING,
            nascimento: DataTypes.DATEONLY,
            senha: DataTypes.STRING,
            contato: DataTypes.STRING,
            shop: DataTypes.STRING,
            detalhesDoProduto: DataTypes.STRING,
            checkout: DataTypes.STRING,
            cart:DataTypes.STRING

        }, {
            sequelize,
            tableName:'users', 
            freezeTableName: true,
            tim
            
        })
return User;
}