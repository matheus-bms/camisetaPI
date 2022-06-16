'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Compras', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_usuarios: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Usuarios',
          key: 'id',
          onDelete: 'CASCADE'
          
        }
      },
      total: {
        type: Sequelize.DOUBLE(8,2),
        allowNull: false
      },
      id_FormaPagamento: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model: 'FormaDePagamentos',
          key: 'id',
          onDelete: 'NO ACTION'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Compras');
  }
};