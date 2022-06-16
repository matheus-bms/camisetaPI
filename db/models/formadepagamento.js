'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FormaDePagamento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      FormaDePagamento.hasMany(models.Compra, {
        as: 'PGTO_compra',
        foreignKey: 'id_FormaPagamento',
        onDelete: 'NO ACTION'
      })
    }
  }
  FormaDePagamento.init({
    nome: DataTypes.STRING(45)
  }, {
    sequelize,
    modelName: 'FormaDePagamento',
  });
  return FormaDePagamento;
};