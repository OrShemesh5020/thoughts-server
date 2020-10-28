"use strict";
const { sequelize } = require("../src/config/postgres-connection");

module.exports = {
  up: (queryInterface, Sequelize) => {
    try {
      return new Promise((resolve) => {
        return queryInterface.createTable({
          schema: "thoughts",
          tableName: "Clients",
        });
      }).catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
    }
  },

  down: (queryInterface, Sequelize) => {
    return Promise.resolve(
      queryInterface.dropTable({
        schema: "thoughts",
        tableName: "Clients",
      })
    );
  },
};
