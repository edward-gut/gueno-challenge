"use strict";

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _cors = _interopRequireDefault(require("cors"));

var _path = _interopRequireDefault(require("path"));

require("@babel/polyfill");

var _appRoutes = _interopRequireDefault(require("./routes/appRoutes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
//Middlewares
app.use((0, _morgan["default"])("tiny"));
app.use((0, _cors["default"])());
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: true
})); //Route

app.use(_express["default"].Router());
app.use("/api", _appRoutes["default"]);
/*
const history = require("connect-history-api-fallback");
app.use(history());
app.use(express.static(path.join(__dirname,'public')));*/

app.use(_express["default"]["static"](_path["default"].join(__dirname, '../challenge-client/build')));
app.get('*', function (req, res) {
  res.sendFile(_path["default"].join(__dirname, '../challenge-client/build'));
}); //Puerto

app.set("puerto", process.env.PORT || 3000);
app.listen(app.get("puerto"), function () {
  console.log('Example app listening on port 3000!');
});