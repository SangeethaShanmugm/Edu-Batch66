const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const app = express();
const PORT = 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const location = fs.readFile("node\restApi\Models\location.json", "UTF-8", (err, data) => {
  if (err) throw err;
  console.log(data);
  try {
    const location = JSON.parse(data);
    console.log(location);
  } catch (err) {
    console.log(err);
  }
});

app.get("/location", (req, res) => {
  res.send(location);
});

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log("Express server listening to port", PORT);
});
