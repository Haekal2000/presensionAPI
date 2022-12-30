import { Sequelize } from "sequelize";
import * as dotenv from 'dotenv';

dotenv.config();

const sequelizeConnection = new Sequelize(
  "presensidb",
  "root",
  process.env.DATABASE_PASSWORD,
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
