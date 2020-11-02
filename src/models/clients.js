const sequelize = require("../config/postgres-connection").sequelize;
const { DataTypes } = require("sequelize");
const Group = require("./groups");
const Thought = require("./thoughts");
// import {sequelize} from '../config/postgres-connection.js';
const Client = sequelize.define("Clients", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  userName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

Client.hasMany(Group, {
  foreignKey: "adminId",
  sourceKey: "id",
});

Client.hasMany(Thought, {
  foreignKey: "clientId",
  sourceKey: "id",
});

Client.sync({
  alter: true,
});

module.exports = Client;
