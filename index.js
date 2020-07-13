const express = require("express");
const mongoose = require("./utils/mongo/mongoose");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use("/api", require("./api"));

app.listen(4000, () => {
  console.log('server is listening');
})