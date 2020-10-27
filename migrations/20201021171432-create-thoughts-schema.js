"use strict";
const { sequelize } = require("../src/config/postgres-connection");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.resolve(sequelize.createSchema("Thoughts", { logging: true }));

    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  down: (queryInterface, Sequelize) => {
    return Promise.resolve(sequelize.dropSchema("Thoughts", { logging: true }));
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
