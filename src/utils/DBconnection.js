import { Sequelize } from "sequelize";

const sequelize = new Sequelize("sql6523868", "sql6523868", "sTW9wPmrbE", {
  host: "sql6.freesqldatabase.com",
  dialect: "mysql",
  pool: {
    connectionLimit: 5,
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

export default sequelize;
