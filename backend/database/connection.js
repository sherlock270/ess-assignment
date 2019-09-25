const env = process.env.NODE_ENV || "development";
const Sequelize = require("sequelize");
const config = require("../config/config.json")[env];

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

module.exports = sequelize;
global.sequelize = sequelize;
