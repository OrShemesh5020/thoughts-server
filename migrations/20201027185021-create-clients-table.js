'use strict';

module.exports = {
  up: queryInterface => Promise.resolve(
    queryInterface.createTable({
      schema: 'thoughts',
      tableName: 'Clients'
    })
  ),

  down: queryInterface => Promise.resolve(
    queryInterface.dropTable({
      schema: 'thoughts',
      tableName: 'Clients'
    })
  )
};
