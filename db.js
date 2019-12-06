const Sequelize = require("sequelize");
const databaseUrl =
  process.env.DATABASE_URL ||
  "postgres://postgres:cheesecake@localhost:5431/postgres";

const db = new Sequelize(databaseUrl);

db.sync()
  .then(console.log("database connected"))
  .catch(console.error);

module.exports = db;
