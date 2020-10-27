"use strict";
const { sequelize } = require("../src/config/postgres-connection");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.resolve(queryInterface.createTable("Categories"));
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  down: (queryInterface, Sequelize) => {
    return Promise.resolve(queryInterface.dropTable("Categories"));

    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
