import { Sequelize } from "sequelize";

const sequelizeConnection = new Sequelize(
  "presensidb",
  "root",
  "kal1243576",
  {
    host: "127.0.0.1",
    port: 3306,
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      idle: 10000,
    },
  }
);

export default sequelizeConnection;
