const { sequelize } = require("../config/postgres-connection");
const { DataTypes } = require("sequelize/types");
const Thought = require("./thoughts");

const Category = sequelize.define("Category", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Category.hasMany(Thought, {
  foreignKey: "categoryId",
  sourceKey: "id",
});

module.exports = Category;
