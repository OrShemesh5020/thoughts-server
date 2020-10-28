"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.resolve(
      queryInterface.createTable({
        schema: "thoughts",
        tableName: "Thoughts",
      })
    );
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.resolve(
      queryInterface.dropTable({
        schema: "thoughts",
        tableName: "Thoughts",
      })
    );
  },
};
