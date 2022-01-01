const express = require("express");
const bodyParser = require("body-parser");

const Routes = require("./src/api/routes/Routes");
const Database = require("./src/Infrastructure/Data/Database");
const constants = require("./src/config/constants");
const app = express();
const port = process.env.PORT || constants.PORT;

const ResponseWrapper = require("./src/Infrastructure/Models/ResponseWrapper");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/", Routes());

process.on("uncaughtException", function (error) {
  console.log(error);
});

app.use(function errorHandler(err, req, res, next) {
  console.log(err);
  res
    .status(500)
    .send(new ResponseWrapper(res.statusCode, err.message === null || err.message === "" ? "an unexpected error occurred" : err.message));
});

  //new Database("mongodb://127.0.0.1:27017/book")
  new Database(process.env.DATABASE_CONNECTION)
  .then(() => {
    app.listen(port);
  });
