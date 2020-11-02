'use strict';

module.exports = {
  up: queryInterface => Promise.resolve(
    queryInterface.createTable({
      schema: 'thoughts',
      tableName: 'Groups'
    })
  ),

  down: queryInterface => Promise.resolve(
    queryInterface.dropTable({
      schema: 'thoughts',
      tableName: 'Groups'
    })
  )
};
