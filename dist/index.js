"use strict";

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
const port = 3000;
app.use((0, _cors.default)());
app.use(cookieParser());
app.use(_bodyParser.default.json());
app.use(_bodyParser.default.urlencoded({
  extended: true
}));
app.get("/", (_req, res) => {
  res.send("Hello World!");
});
app.listen(port, () => {
  console.log(`app listening on port ${port}!`);
});