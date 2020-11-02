const sequelize = require("../config/postgres-connection").sequelize;
const { DataTypes } = require("sequelize");
const { TYPES } = require("../constants/thoughts");
// const Group = require("./groups");
const Thought = sequelize.define("Thoughts", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
  },
  clientId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  groupId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  categoryId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  likes: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  type: {
    type: DataTypes.ENUM(TYPES),
    allowNull: false,
  },
  status: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

Thought.sync({
  alter: true,
});

module.exports = Thought;
