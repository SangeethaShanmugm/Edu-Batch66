const express = require("express");
const app = express();
const PORT = 8080;

//default express endpoint
app.get("/", (req, res) => {
  res.send("Express Server default page");
});
//location endpoint
app.get("/location", (req, res) => {
  res.send("This is location route");
});

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`Express server listing to port ${PORT}`);
});
