const express = require("express");
const app = express();

const vaccine = require("./routes/routerVaccine")
const index = require("./routes/index")

app.use(express.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/", index)

app.use("/vaccine", vaccine)

module.exports = app;
