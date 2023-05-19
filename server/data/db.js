const mysql = require("mysql2");

const config = require("../config/config");
const { Sequelize } = require("sequelize");
const sequelize = new Sequelize(
  config.db.database,
  config.db.user,
  config.db.password,
  {
    dialect: "mysql",
    host: config.db.host,
  }
);

async function connect() {
  try {
    await sequelize.authenticate();
    console.log("mysql connection success");
  } catch (err) {
    log.console("error connection: " + err);
  }
}

module.exports = sequelize;
