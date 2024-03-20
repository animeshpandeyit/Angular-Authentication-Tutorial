const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const PORT = 3000;

const api = require("./routes/api");

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use("/api", api);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/check/:id", (req, res) => {
  res.send(res.body);
});

app.listen(PORT, function () {
  console.log("Server listening on port " + PORT);
});
