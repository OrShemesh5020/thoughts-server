const sequelize = require("../config/postgres-connection").sequelize;
const { DataTypes } = require("sequelize");
const Thought = require("./thoughts");
const Group = sequelize.define("Groups", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
  },
  adminId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

Group.hasMany(Thought, {
  foreignKey: "groupId",
  sourceKey: "id",
});

Group.sync({
  alter: true,
});
module.exports = Group;
