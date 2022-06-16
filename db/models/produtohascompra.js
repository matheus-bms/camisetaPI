'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProdutoHasCompra extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ProdutoHasCompra.belongsTo(models.Produto, {
        as: 'produto_para_compra',
        foreignKey: 'id_produtos',
        onDelete: 'NO ACTION'
      })
      ProdutoHasCompra.belongsTo(models.Compra, {
        as: 'compra_para_produto',
        foreignKey: 'id_compras',
        onDelete: 'CASCADE'
      })
    }
  }
  ProdutoHasCompra.init({
    id_produtos: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_compras: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    quantidade:{
      type:  DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'ProdutoHasCompra',
  });
  return ProdutoHasCompra;
};