"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.resolve(
      queryInterface.createTable({
        schema: "thoughts",
        tableName: "Groups",
      })
    );
  },

  down: (queryInterface, Sequelize) => {
    return Promise.resolve(
      queryInterface.dropTable({
        schema: "thoughts",
        tableName: "Groups",
      })
    );
  },
};
