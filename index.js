import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import sequelizeConnection from "./src/utils/DBconnection";
import router from "./src/routes/routes";
import * as dotenv from "dotenv";
import morgan from "morgan";
import helmet from "helmet";

const app = express();
const port = 3000;

dotenv.config();

app.use(cors());
app.use(cookieParser());
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);
app.use(bodyParser.json());
app.use(router);

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.listen(port, () => {
  console.log(`app listening on port ${port}!`);
});

sequelizeConnection
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully");
  })
  .catch((error) => {
    console.error("Unable to connect to the database: ", error);
  });
