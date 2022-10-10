import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import sequelizeConnection from './src/utils/DBconnection';
import router from './src/routes/routes';

const app = express();
const port = 3000;

app.use(cors());

app.use(cookieParser())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// references: {
//   model: "faculties",
//   key: "id",
// },

app.use(router);

app.listen(port, () => {
  console.log(`app listening on port ${port}!`);
});

sequelizeConnection.authenticate().then(() => {
  console.log('Connection has been established successfully');
}).catch((error) => {
  console.error('Unable to connect to the database: ', error);
});
