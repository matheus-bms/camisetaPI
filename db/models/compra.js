'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Compra extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Compra.belongsTo(models.FormaDePagamento, {
        as: 'compra_pagamento',
        foreignKey: 'id_FormaPagamento',
        onDelete: 'NO ACTION'
      })
      Compra.belongsTo(models.Usuario, {
        as: 'compra_usuario',
        foreignKey: 'id_usuarios',
        onDelete: 'CASCADE'
      })
      Compra.belongsToMany(models.Produto, {
        as: 'compra_produto',
        foreignKey: 'id_compras',
        through: 'ProdutoHasCompra'
      })
    
    }
  }
  Compra.init({
    id_usuarios: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    total:{
      type:DataTypes.DOUBLE(8,2),
      allowNull: false
    },
    id_FormaPagamento: {
      type:DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Compra',
  });
  return Compra;
};