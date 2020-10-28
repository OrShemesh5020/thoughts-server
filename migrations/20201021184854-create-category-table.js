"use strict";
const { sequelize } = require("../src/config/postgres-connection");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.resolve(
      queryInterface.createTable({
        schema: "thoughts",
        tableName: "Categories",
      })
    );
  },

  down: (queryInterface, Sequelize) => {
    return Promise.resolve(
      queryInterface.dropTable({
        schema: "thoughts",
        tableName: "Categories",
      })
    );
  },
};
