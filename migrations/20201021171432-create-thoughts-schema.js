"use strict";
const { sequelize } = require("../src/config/postgres-connection");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.resolve(
      sequelize.createSchema("Thoughts", { logging: true })
    );
  },

  down: (queryInterface, Sequelize) => {
    return Promise.resolve(sequelize.dropSchema("Thoughts", { logging: true }));
  },
};
