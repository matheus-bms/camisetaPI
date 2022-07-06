'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Contato extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Contato.init({
    nome: {
      type: DataTypes.STRING(45)
    },
    email: {
      type: DataTypes.STRING
    },
    assunto: {
      type: DataTypes.TEXT(60)
    },
    mensagem: {
      type: DataTypes.TEXT(255)
    }
  }, {
    sequelize,
    modelName: 'Contato',
  });
  return Contato;
};