'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Videos', 'Categorias', {
        allowNull: true,
        type: Sequelize.STRING
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Videos', 'Categorias');
  }
};