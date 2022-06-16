'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Usuario.hasMany(models.Compra, {
        as: 'usuario_compra',
        foreignKey: 'id_usuarios',
        onDelete: 'CASCADE'
      })
    }
  }
  Usuario.init({
    login: {
      type: DataTypes.STRING(45)
    },
    senha: {
      type: DataTypes.STRING(60),
    },
    nome: {
      type: DataTypes.STRING(45)
    },
    nascimento: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    email: {
      type:DataTypes.STRING
    },
  }, {
    sequelize,
    modelName: 'Usuario',
  });
  return Usuario;
};