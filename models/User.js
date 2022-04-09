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
            numero: DataTypes.STRING,
            validade: DataTypes.STRING,
            condigoSeguranca: DataTypes.STRING
        }, {
            sequelize,
            tableName:'usuarios', 
            freezeTableName: true,
            timestamps: false,
        })
return User;
}