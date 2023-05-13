const express = require("express");

const app = express();

const port = 4000;

app.use(function (req, res) {
  res.end("Hello Samir");
});

app.listen(port, function () {
  console.log("port on listenin " + `${port}`);
});
