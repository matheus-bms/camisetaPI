'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Produto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Produto.belongsTo(models.Categoria,{
        as: 'Categoria_Produto',
        foreignKey: 'id_categoria',
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE'
      })
      Produto.belongsToMany(models.Compra, {
        as: 'produto_compras',
        foreignKey: 'id_produtos',
        through: 'ProdutosHasCompras'
        // througt ele indica qual é a tabela intermediaria 
      })
    }
  }
  Produto.init({
    nome: {
      type:DataTypes.STRING(45),
      allowNull: false
    },
    preco: {
      type:DataTypes.DOUBLE(8,2),
      
    },
    tamanho: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    descricao: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    imagem: {
      type: DataTypes.STRING(100),
      defaultValue: '/imagens/pic.jpg'
    },
    genero: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    id_categoria: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Produto',
  });
  return Produto;
};