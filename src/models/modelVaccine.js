const { Sequelize, DataTypes } = require("sequelize");
const { database } = require("../db");

const vaccine = database.define("vaccine", {
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },

  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  expected_date: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  vaccinated: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
    defaultValue: false,
  }
});

vaccine.sync();
module.exports = vaccine;
