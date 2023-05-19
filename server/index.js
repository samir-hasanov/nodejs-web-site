const express = require("express");
const mysql = require("mysql2");

const config = require("./config/config");

const Blog = require("./models/blog");
const Category = require("./models/category");

const app = express();

const port = 4000;

app.use(function (req, res) {
  res.end("Hello Samir");
});

app.listen(port, function () {
  console.log("port on listenin " + `${port}`);
});

// let connection = mysql.createConnection(config.db);

// connection.connect(function (err) {
//   if (err) {
//     log.console(err + "connection false");
//   }

//   log.console("connected successfully");
// });
